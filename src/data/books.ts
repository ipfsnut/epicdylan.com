export interface Book {
  slug: string;
  title: string;
  subtitle?: string;
  author: string;
  year: number;
  publisher: string;
  coverImage: string;
  description: string;
  purchaseLinks: { label: string; url: string }[];
}

export const books: Book[] = [
  {
    slug: 'inevitable',
    title: 'INEVITABLE',
    subtitle: 'Distributed Cognition & Network Superintelligence',
    author: 'T. Dylan Daniel',
    year: 2024,
    publisher: 'Whitney Morgan Media',
    coverImage: '/INEVITABLEcover.png',
    description:
      'A contrasting vision of the future of intelligence. Instead of assuming that artificial general intelligence is on the way, the time has come to reconsider the way we think about AI in light of the facts that emerge from a careful study of the intelligence found in living minds.',
    purchaseLinks: [
      { label: 'Alexandria', url: 'https://www.alexandriabooks.com/collection/inevitable' },
      {
        label: 'Amazon',
        url: 'https://www.amazon.com/Inevitable-Distributed-Cognition-Network-Superintelligence/dp/1962668096',
      },
    ],
  },
  {
    slug: 'formal-dialectics',
    title: 'Formal Dialectics',
    author: 'Thomas Dylan Daniel',
    year: 2018,
    publisher: 'Cambridge Scholars Publishing',
    coverImage: '/formalDialectics.jpg',
    description:
      'This book explores the built-in limits of reason itself by pointing out the fact that language can only be used to create incomplete systems. Philosophy, mathematics, and logic supply the groundwork for a framing mechanism to help thinkers understand why thinking itself can sometimes fail.',
    purchaseLinks: [
      {
        label: 'Amazon',
        url: 'https://www.amazon.com/Formal-Dialectics-Thomas-Dylan-Daniel/dp/1527515753/',
      },
    ],
  },
];
