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
