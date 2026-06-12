export type PublicationCategory = 'journal' | 'book' | 'chapter' | 'magazine';

export interface Publication {
  category: PublicationCategory;
  title: string;
  authors: string;
  venue: string;
  year: number;
  volume?: string;
  doi?: string;
  /** Whether `https://doi.org/${doi}` resolves yet. In-press papers get a DOI before it activates. */
  doiResolves?: boolean;
  url?: string;
  abstract?: string;
  keywords?: string[];
  note?: string;
  featured?: boolean;
}

// Ordered newest-first within the page; `featured` is pulled to the top.
export const publications: Publication[] = [
  {
    category: 'journal',
    title:
      'Oscillatory Dynamics as the Coordination Layer of the Organism: Waves, Markov Blankets, and the Virtual Space of Cognition',
    authors: 'Daniel, T. D.',
    venue: 'Frontiers in Neuroscience',
    year: 2026,
    volume: '20',
    doi: '10.3389/fnins.2026.1836602',
    // DOI does not resolve until full publication (Crossref registers it at that point).
    // During finalization, link to the Frontiers abstract preview. At publication, swap
    // `url` to `https://doi.org/${doi}` and set `doiResolves: true`.
    url: 'https://www.frontiersin.org/journals/neuroscience/articles/10.3389/fnins.2026.1836602/abstract',
    doiResolves: false,
    note: 'In press · Hypothesis and Theory · Perception Science',
    keywords: [
      'coordination layer',
      'ecological psychology',
      'enactivism',
      'higher-order affordances',
      'Markov blanket',
      'oscillatory dynamics',
      'virtual space of cognition',
    ],
    abstract:
      'Neural oscillations are reframed not as a mechanism that implements cognition but as a coordination layer of the organism. Metabolic activity produces oscillatory patterns accessible to individual cells, enabling the cognitive mapping of body and environment. The account integrates Markov blankets—formalizing why brain imaging cannot directly reveal cognitive processes—with frequency-band analysis across nested organizational hierarchies. Several conditions (ME/CFS, Long COVID, cancer-related cognitive impairment, Alzheimer’s disease, and age-related decline) are argued to share a degraded metabolic substrate that constrains cognitive capacity. The framework yields a testable prediction: aperiodic spectral flattening should temporally precede the loss of specific oscillatory peaks.',
    featured: true,
  },
  {
    category: 'book',
    title: 'INEVITABLE: Distributed Cognition & Network Superintelligence',
    authors: 'Daniel, T. D.',
    venue: 'Whitney Morgan Media',
    year: 2024,
    url: 'https://www.alexandriabooks.com/collection/inevitable',
    note: 'ISBN 9781962668088',
  },
  {
    category: 'book',
    title: 'Formal Dialectics',
    authors: 'Daniel, T. D.',
    venue: 'Cambridge Scholars Publishing',
    year: 2018,
    url: 'https://www.amazon.com/Formal-Dialectics-Thomas-Dylan-Daniel/dp/1527515753',
    note: 'ISBN 1527515753 · 212 pp.',
  },
  {
    category: 'chapter',
    title: 'The Lexicultural Propagation of Concepts (Chapter 2)',
    authors: 'Daniel, T. D.',
    venue: 'In B. Thomas (Ed.), Philosophy of Language. Cambridge Scholars Publishing',
    year: 2016,
    url: 'https://www.amazon.com/Philosophy-Language-Brian-Thomas/dp/1443880426',
  },
  {
    category: 'journal',
    title:
      'The Need for a Standard Index of Vehicular Pollution Intensity in the United States',
    authors: 'Daniel, T. D.',
    venue: 'Oil, Gas & Energy Law (OGEL), 6, Environment',
    year: 2015,
    url: 'https://www.ogel.org/article.asp?key=3591',
  },
  {
    category: 'magazine',
    title: 'Pierre Hadot (1922–2010)',
    authors: 'Daniel, T. D.',
    venue: 'Philosophy Now, Issue 113',
    year: 2016,
    url: 'https://philosophynow.org/issues/113/Pierre_Hadot_1922-2010',
  },
  {
    category: 'magazine',
    title: 'Hermann von Helmholtz (1821–1894)',
    authors: 'Daniel, T. D.',
    venue: 'Philosophy Now, Issue 129',
    year: 2018,
    url: 'https://philosophynow.org/issues/129/Hermann_von_Helmholtz_1821-1894',
  },
];

export const featuredPublication = publications.find((p) => p.featured);
