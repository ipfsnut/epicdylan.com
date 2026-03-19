import React, { useState, useEffect, useCallback, useRef } from 'react';

const CONFIG = {
  ensName: 'epicdylan.eth',
  address: '0xC6cD1A73fe649fEbBD2b400717c8CF5C5b5BFD8f',
  contracts: {
    1: '0xCB1Da1209B99e2b22F4d881011C76F21B3c65137',
    8453: '0xcf6d251b332856e651099F86a32345C5a54Ed794',
  } as Record<number, string>,
  chains: [
    { id: 1, hex: '0x1', name: 'Ethereum', symbol: 'ETH', rpc: '', explorer: '' },
    { id: 8453, hex: '0x2105', name: 'Base', symbol: 'ETH',
      rpc: 'https://mainnet.base.org', explorer: 'https://basescan.org' },
  ],
  presets: ['0.001', '0.005', '0.01', '0.05'],
};

// tip(string) selector = keccak256("tip(string)")[:4]
const TIP_SELECTOR = 'cb56393c';

function encodeTipCall(memo: string): string {
  const memoBytes = new TextEncoder().encode(memo);
  const paddedLen = Math.ceil(memoBytes.length / 32) * 32 || 32;
  const buf = new Uint8Array(4 + 32 + 32 + paddedLen);
  for (let i = 0; i < 4; i++) buf[i] = parseInt(TIP_SELECTOR.substr(i * 2, 2), 16);
  buf[4 + 31] = 0x20;
  const len = memoBytes.length;
  buf[4 + 32 + 28] = (len >> 24) & 0xff;
  buf[4 + 32 + 29] = (len >> 16) & 0xff;
  buf[4 + 32 + 30] = (len >> 8) & 0xff;
  buf[4 + 32 + 31] = len & 0xff;
  buf.set(memoBytes, 4 + 64);
  return '0x' + Array.from(buf).map(b => b.toString(16).padStart(2, '0')).join('');
}

interface WalletProvider {
  info: { uuid: string; name: string; icon: string; rdns: string };
  provider: any;
}

function ethToHexWei(eth: string): string | null {
  if (!/^\d+(\.\d+)?$/.test(eth)) return null;
  const [whole = '0', frac = ''] = eth.split('.');
  const wei = BigInt(whole + (frac + '000000000000000000').slice(0, 18));
  if (wei === BigInt(0)) return null;
  return '0x' + wei.toString(16);
}

function shortAddr(addr: string): string {
  return addr.slice(0, 6) + '\u2026' + addr.slice(-4);
}

export const TipJar: React.FC = () => {
  const [providers, setProviders] = useState<WalletProvider[]>([]);
  const [activeProvider, setActiveProvider] = useState<any>(null);
  const [providerName, setProviderName] = useState('');
  const [connected, setConnected] = useState(false);
  const [account, setAccount] = useState<string | null>(null);
  const [chainHex, setChainHex] = useState<string | null>(null);
  const [chainIdx, setChainIdx] = useState(1); // default Base
  const [amount, setAmount] = useState('');
  const [msg, setMsg] = useState("I'm sending a tip because I got value out of the SEM Tutor app!");
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<{ type: string; text: string } | null>(null);
  const providersRef = useRef<WalletProvider[]>([]);

  const chain = CONFIG.chains[chainIdx];

  // EIP-6963: discover wallet providers
  useEffect(() => {
    const discovered: WalletProvider[] = [];

    const handler = (event: any) => {
      const wp: WalletProvider = {
        info: event.detail.info,
        provider: event.detail.provider,
      };
      // dedupe by uuid
      if (!discovered.find(p => p.info.uuid === wp.info.uuid)) {
        discovered.push(wp);
        providersRef.current = [...discovered];
        setProviders([...discovered]);
      }
    };

    window.addEventListener('eip6963:announceProvider', handler);
    window.dispatchEvent(new Event('eip6963:requestProvider'));

    // fallback: if no EIP-6963 providers after 500ms, check window.ethereum
    const fallbackTimer = setTimeout(() => {
      if (discovered.length === 0 && (window as any).ethereum) {
        const fallback: WalletProvider = {
          info: { uuid: 'legacy', name: 'Browser Wallet', icon: '', rdns: '' },
          provider: (window as any).ethereum,
        };
        discovered.push(fallback);
        providersRef.current = [...discovered];
        setProviders([...discovered]);
      }
    }, 500);

    return () => {
      window.removeEventListener('eip6963:announceProvider', handler);
      clearTimeout(fallbackTimer);
    };
  }, []);

  const flash = useCallback((type: string, text: string) => {
    setStatus({ type, text });
    if (type === 'success') setTimeout(() => setStatus(null), 4000);
  }, []);

  const connect = async (wp: WalletProvider) => {
    try {
      const accts = await wp.provider.request({ method: 'eth_requestAccounts' });
      setActiveProvider(wp.provider);
      setProviderName(wp.info.name);
      setAccount(accts[0]);
      setConnected(true);
      const hex = await wp.provider.request({ method: 'eth_chainId' });
      setChainHex(hex);
    } catch (e: any) {
      flash('error', e.message || 'Connection rejected');
    }
  };

  const pickChain = async (i: number) => {
    const target = CONFIG.chains[i];
    setChainIdx(i);
    if (!connected || !activeProvider) return;
    try {
      await activeProvider.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: target.hex }],
      });
      setChainHex(target.hex);
    } catch (e: any) {
      if (e.code === 4902 && target.rpc) {
        try {
          await activeProvider.request({
            method: 'wallet_addEthereumChain',
            params: [{
              chainId: target.hex,
              chainName: target.name,
              nativeCurrency: { name: target.symbol, symbol: target.symbol, decimals: 18 },
              rpcUrls: [target.rpc],
              blockExplorerUrls: target.explorer ? [target.explorer] : undefined,
            }],
          });
          setChainHex(target.hex);
        } catch (_) {
          flash('error', 'Could not add ' + target.name);
        }
      }
    }
  };

  const send = async () => {
    if (!connected || sending || !activeProvider) return;
    const val = ethToHexWei(amount);
    if (!val) { flash('error', 'Enter an amount'); return; }

    setSending(true);
    flash('info', 'Confirm in your wallet\u2026');

    if (chainHex !== chain.hex) {
      try { await pickChain(chainIdx); }
      catch (_) { setSending(false); flash('error', 'Chain switch failed'); return; }
    }

    const contractAddr = CONFIG.contracts[chain.id];
    const txParams: any = { from: account, value: val };

    if (contractAddr) {
      txParams.to = contractAddr;
      txParams.data = encodeTipCall(msg || '');
    } else {
      txParams.to = CONFIG.address;
    }

    try {
      const tx = await activeProvider.request({
        method: 'eth_sendTransaction',
        params: [txParams],
      });
      setSending(false);
      flash('success', 'Sent! ' + shortAddr(tx));
    } catch (e: any) {
      setSending(false);
      const errMsg = (e.message || '').toLowerCase().includes('denied')
        ? 'Transaction cancelled' : (e.message || 'Failed');
      flash('error', errMsg);
    }
  };

  const copyAddr = () => {
    navigator.clipboard.writeText(CONFIG.address).then(() => {
      flash('success', 'Address copied!');
    });
  };

  // Listen for wallet events once connected
  useEffect(() => {
    if (!activeProvider) return;
    const onAccounts = (a: string[]) => { setAccount(a[0] || null); setConnected(!!a[0]); };
    const onChain = (c: string) => { setChainHex(c); };
    activeProvider.on('accountsChanged', onAccounts);
    activeProvider.on('chainChanged', onChain);
    return () => {
      activeProvider.removeListener('accountsChanged', onAccounts);
      activeProvider.removeListener('chainChanged', onChain);
    };
  }, [activeProvider]);

  const hasWallets = providers.length > 0;

  const statusColor = status?.type === 'success'
    ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
    : status?.type === 'error'
      ? 'bg-red-50 text-red-700 border-red-200'
      : 'bg-warm-accent/5 text-warm-accent border-warm-accent/20';

  return (
    <div className="p-6 md:p-8">
      <div className="max-w-[440px] mx-auto">

        {/* Explainer */}
        <div className="text-center mb-6">
          <p className="text-warm-text-secondary text-sm leading-relaxed">
            This runs on an open network with no middleman.
            I keep every penny you send &mdash; no platform cut.
            The only cost is the network transaction fee, paid by the sender.
          </p>
          <p className="text-warm-text-secondary/60 text-xs mt-3 pt-3 border-t border-warm-border">
            This is free, open-source software. It costs nothing to run.
            If you're a creator or developer, fork it and make it yours.
          </p>
        </div>

        {/* Card */}
        <div className="bg-warm-bg border border-warm-border rounded-2xl p-6">

          {/* Recipient */}
          <div className="text-center mb-5">
            <div className="text-warm-text text-xl font-bold font-display">
              {CONFIG.ensName}
            </div>
            <div
              className="text-warm-text-secondary/60 text-[0.7rem] mt-1 break-all cursor-pointer hover:text-warm-accent transition-colors font-mono"
              onClick={copyAddr}
              title="Click to copy"
            >
              {CONFIG.address}
            </div>
          </div>

          {hasWallets ? (
            <>
              {/* Chain selector */}
              <div className="flex gap-2 mb-4">
                {CONFIG.chains.map((c, i) => (
                  <button
                    key={c.id}
                    onClick={() => pickChain(i)}
                    className={`flex-1 py-2 rounded-lg border text-sm font-medium transition-all ${
                      chain.id === c.id
                        ? 'border-warm-accent bg-warm-accent/10 text-warm-accent'
                        : 'border-warm-border bg-transparent text-warm-text-secondary hover:border-warm-accent/50 hover:text-warm-text'
                    }`}
                  >
                    {c.name}
                  </button>
                ))}
              </div>
              {chain.id === 8453 && (
                <p className="text-center text-warm-text-secondary/60 text-[0.7rem] -mt-2 mb-4">
                  Base fees are fractions of a cent
                </p>
              )}

              {!connected ? (
                <div className="space-y-2">
                  {providers.map(wp => (
                    <button
                      key={wp.info.uuid}
                      onClick={() => connect(wp)}
                      className="w-full py-3 rounded-xl border-2 border-warm-accent text-warm-accent font-semibold transition-all hover:bg-warm-accent/10 flex items-center justify-center gap-2"
                    >
                      {wp.info.icon && (
                        <img src={wp.info.icon} alt="" className="w-5 h-5 rounded" />
                      )}
                      Connect {wp.info.name}
                    </button>
                  ))}
                </div>
              ) : (
                <>
                  {/* Connected indicator */}
                  <p className="text-center text-warm-text-secondary/60 text-[0.7rem] mb-4">
                    Connected via {providerName}
                  </p>

                  {/* Amount */}
                  <div className="mb-4">
                    <div className="text-warm-text-secondary text-[0.7rem] font-semibold uppercase tracking-wider mb-2">
                      Amount (ETH)
                    </div>
                    <div className="flex gap-1.5 mb-2">
                      {CONFIG.presets.map(p => (
                        <button
                          key={p}
                          onClick={() => setAmount(p)}
                          className={`flex-1 py-2 rounded-lg border text-xs font-mono transition-all ${
                            amount === p
                              ? 'border-warm-accent bg-warm-accent/10 text-warm-accent'
                              : 'border-warm-border bg-transparent text-warm-text-secondary hover:border-warm-accent hover:text-warm-text'
                          }`}
                        >
                          {p}
                        </button>
                      ))}
                    </div>
                    <input
                      type="text"
                      inputMode="decimal"
                      placeholder="Or enter custom amount"
                      value={amount}
                      onChange={e => setAmount(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg bg-white border border-warm-border text-warm-text text-sm font-mono outline-none focus:border-warm-accent transition-colors placeholder-warm-text-secondary/40"
                    />
                  </div>

                  {/* Memo (only when contract is deployed) */}
                  {CONFIG.contracts[chain.id] && (
                    <div className="mb-4">
                      <div className="text-warm-text-secondary text-[0.7rem] font-semibold uppercase tracking-wider mb-2">
                        Message (recorded onchain)
                      </div>
                      <input
                        type="text"
                        placeholder="Leave a message"
                        maxLength={140}
                        value={msg}
                        onChange={e => setMsg(e.target.value)}
                        className="w-full px-3 py-2 rounded-lg bg-white border border-warm-border text-warm-text text-sm outline-none focus:border-warm-accent transition-colors placeholder-warm-text-secondary/40"
                      />
                    </div>
                  )}

                  {/* Send */}
                  <button
                    onClick={send}
                    disabled={sending || !amount}
                    className="w-full py-3 rounded-xl bg-warm-accent hover:bg-warm-accent-hover text-white font-semibold transition-all disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    {sending ? 'Sending\u2026' : 'Send Tip'}
                  </button>
                </>
              )}
            </>
          ) : (
            <div className="text-center text-warm-text-secondary text-sm leading-relaxed">
              <p>No wallet detected. Copy the address above and send ETH (mainnet or Base) from any wallet.</p>
            </div>
          )}

          {/* Copy + Comment row */}
          <div className="flex items-center justify-center gap-3 mt-4 pt-4 border-t border-warm-border">
            <button
              onClick={copyAddr}
              className="px-3 py-1.5 rounded-lg border border-warm-border text-warm-text-secondary text-xs hover:border-warm-accent hover:text-warm-accent transition-all"
            >
              Copy Address
            </button>
            <a
              href="mailto:dylan@wippublishing.com?subject=SEM%20Tutor%20Feedback&body=Hi%20Dylan%2C%0A%0A"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-lg border border-warm-border text-warm-text-secondary text-xs hover:border-warm-accent hover:text-warm-accent transition-all no-underline"
            >
              Comment
            </a>
          </div>

          {/* Status */}
          {status && (
            <div className={`mt-3 px-3 py-2 rounded-lg text-xs text-center border ${statusColor}`}>
              {status.text}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="text-center mt-4 text-warm-text-secondary/40 text-[0.68rem]">
          Powered by Ethereum &middot;{' '}
          <a href="https://github.com/ipfsnut/tipjar" target="_blank" rel="noopener noreferrer" className="text-warm-text-secondary/60 no-underline hover:text-warm-accent transition-colors">
            Source
          </a>
        </div>
      </div>
    </div>
  );
};
