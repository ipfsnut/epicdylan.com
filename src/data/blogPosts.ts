export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  description: string;
  body: string;
  link?: string; // optional external link (e.g. Paragraph mirror)
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'epic-launch',
    title: '$EPIC: One Token to Rule Them All',
    date: '2026-04-09',
    description: 'Launching $EPIC — the site coin for epicdylan.com. 100B tokens, 10 bonding curve pools, asymmetric fees, and a deflationary burn engine. No more confusion. One token.',
    body: `I've built a lot of things on Base over the past year. ArbMe, Trinity, ChaosTheory, $RATCHET, TipJar, SteakNStake — each one an experiment in how DeFi could work differently. Some of them worked. Some of them didn't. All of them taught me something.

The problem: people who wanted to support what I'm building had no clear way to do it. Too many tokens, too many projects, too much confusion. "Which one do I buy?" is a question I heard constantly and never had a good answer to.

$EPIC is the answer. One token. The site coin for epicdylan.com.

## What $EPIC Is

100 billion tokens on Base, deployed across 10 bonding curve pools using custom Uniswap V4 hooks. No presale, no VC allocation, no team tokens held back. 100% of supply goes into the pools.

The pools are split into two tiers:

**USDC pool (1% fee)** — The main trading venue. 79B tokens on a shaped curve that starts thin (early buyers move the price easily) and gets progressively deeper (higher prices have massive support behind them). This is where you buy and sell.

**9 arb pools (asymmetric fees)** — Three pools each for WETH, cbBTC, and Clanker, at three fee tiers: 5%/5% (symmetric), 2%/8% (moderate ratchet), and 4%/16% (aggressive ratchet). These pools exist to generate arbitrage revenue and burn $EPIC tokens.

## How the Fees Work

Every pool charges a fee on buys and on sells. Buy fees collect the quote asset. Sell fees burn $EPIC to 0xdead. Where the buy fees go depends on the pool:

- **USDC pool buy fees** go to the creator (me) to fund development, infrastructure, and whatever else I decide. This is the revenue model. It's transparent and on-chain.
- **WETH, cbBTC, and Clanker pool buy fees** accumulate in the multisig treasury. These funds support the ecosystem — future development, new pools, community initiatives.

The asymmetric pools (2%/8% and 4%/16%) charge more on sells than buys. This creates a ratchet effect:

- **4% buy / 16% sell**: Easy to buy EPIC with WETH. Very expensive to sell EPIC for WETH. The pool accumulates WETH on small price moves, and only releases it on major crashes — burning 16% of the EPIC in the process.

This isn't hidden or deceptive — it's a stated mechanism. The fee rates are immutable constants in the smart contracts, readable by anyone on Basescan. If you want to exit, the USDC pool is always there at 1%.

## The Arb Surface

10 pools across 4 quote assets (USDC, WETH, cbBTC, Clanker) create 6 pairwise arbitrage surfaces. Every time any two of USD, ETH, BTC, or Clanker move relative to each other, at least one arb opportunity opens up. Bots equalize the prices, paying fees and burning $EPIC in the process.

The burn is permanent. The supply only goes down. Every arb cycle, every sell, every market move — they all reduce the total supply of $EPIC.

## Why This Matters

$EPIC consolidates everything I've built into one token with real mechanics behind it. It's a meme, it's infrastructure, it's a good time. The bonding curves provide permanent liquidity. The asymmetric fees create deflationary pressure.

The first use case: hold $EPIC to read my books in the browser on epicdylan.com. More utility coming — the idea is that $EPIC becomes the key to whatever I'm building. Future projects get paired with it so you can always get into whatever I'm working on if you have your $EPIC handy.

ArbMe stays. It represents a real app with real users. I think creator coins can work, but I also think creators need complete control over them.

## Contracts

All contracts are live on Base mainnet. Fee tiers shown as buy%/sell%.

**$EPIC Token**
\`0x003b9aC55a8575295e4BE4901AA1645CC2132369\`

| Pool | Buy/Sell | Address |
|------|----------|---------|
| USDC | 1% / 1% | \`0x4da6...C8c8\` |
| WETH | 5% / 5% | \`0xE00B...08c8\` |
| WETH | 2% / 8% | \`0x2c44...88C8\` |
| WETH | 4% / 16% | \`0x600a...88c8\` |
| cbBTC | 5% / 5% | \`0x88d5...08C8\` |
| cbBTC | 2% / 8% | \`0x4b63...48c8\` |
| cbBTC | 4% / 16% | \`0x19bc...c8c8\` |
| Clanker | 5% / 5% | \`0xbb4a...c8c8\` |
| Clanker | 2% / 8% | \`0x2efe...48c8\` |
| Clanker | 4% / 16% | \`0xc2b5...88c8\` |

**Multisig:** \`0xb7DD467A573809218aAE30EB2c60e8AE3a9198a0\`

All hook contracts share the same verified source ([EpicHook.sol](https://basescan.org/address/0x4da6Bd0941A985785E9dAe483797701eF97BC8c8#code)). The multisig can pull liquidity from any pool at any time and redeploy it as needed.`,
  },
  {
    slug: 'tipjar',
    title: 'TipJar: An Onchain Tip Jar in 34 Lines',
    date: '2026-03-19',
    description: 'A minimal Solidity contract and single-page webapp for receiving ETH tips with onchain memos. No backend, no platform cut, no dependencies.',
    body: `I wanted a tip jar that was as simple as the idea itself. Someone sends ETH, a memo gets recorded onchain, and every wei goes straight to the recipient. That's it.

TipJar is 34 lines of Solidity:

- A sender calls \`tip("nice work")\` with some ETH attached.
- The contract emits a \`Tip\` event with the sender's address, the amount, and the memo.
- It forwards everything to the owner via \`transfer()\`.
- Nothing accumulates. There's no withdraw pattern because there's nothing to withdraw.

The \`receive()\` fallback handles plain ETH sends too — you don't need to know the contract interface to send a tip. The memo is what makes this more than a raw transfer. Every tip is a signed, timestamped, human-readable message on a public ledger. You can look up who tipped, how much, and what they said — forever.

The webapp is a single HTML file. It encodes the ABI calldata in vanilla JS, handles wallet connection and chain switching, and works on both Ethereum and Base. The whole thing is self-contained — host it anywhere, or just open the file in a browser.

A few design choices worth noting:

**\`transfer()\` over \`.call{value:}()\`** — The 2300 gas stipend prevents reentrancy by construction. The owner is an EOA, so the gas limit is never an issue. If you fork this for a multisig owner, switch to \`.call\`.

**\`calldata\` for the memo** — Cheaper than \`memory\` since the string is never modified, just emitted in the event.

**\`indexed\` on \`from\` only** — Lets you query "all tips from address X" efficiently. Amount and memo stay unindexed since you'd rarely filter on those.

**No \`fallback()\`** — Calls with unknown selectors revert. Plain ETH sends hit \`receive()\`. Anything else fails loudly, which is the right default.

The contract is deployed and verified on both chains:

- [Ethereum — 0xCB1Da1209B99e2b22F4d881011C76F21B3c65137](https://etherscan.io/address/0xCB1Da1209B99e2b22F4d881011C76F21B3c65137)
- [Base — 0xcf6d251b332856e651099F86a32345C5a54Ed794](https://basescan.org/address/0xcf6d251b332856e651099F86a32345C5a54Ed794)

The source is MIT-licensed. Fork it and make it yours: [github.com/ipfsnut/tipjar](https://github.com/ipfsnut/tipjar)`,
  },
];
