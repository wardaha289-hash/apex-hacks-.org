export type Review = {
  id: string
  author: string
  role: string
  game: string
  rating: number
  /** ISO date — required for Review schema */
  datePublished: string
  body: string
}

/**
 * Buyer reviews shown on /reviews and emitted as Review + AggregateRating schema.
 * Dates stay recent for Apex commercial reviews.
 */
export const REVIEWS: Review[] = [
  {
    id: '1',
    author: 'jayk',
    role: 'Ranked grinder',
    game: 'Apex Legends',
    rating: 5,
    datePublished: '2026-09-20',
    body: 'Status on the product page matched what I got in game. Player ESP held after the first Easy Anti-Cheat rebuild — glad I waited for a clear status before loading.',
  },
  {
    id: '2',
    author: 'nova',
    role: 'Loot path IGL',
    game: 'Apex Legends',
    rating: 5,
    datePublished: '2026-09-19',
    body: 'Bought it for Loot ESP and leave the aimbot off. Not clearing forty empty buildings on the map rotation changes the whole game.',
  },
  {
    id: '3',
    author: 'rift',
    role: 'Squad lead',
    game: 'Apex Legends',
    rating: 4,
    datePublished: '2026-09-19',
    body: 'No fake multi-game catalog. Weapon ESP plus honest Updating vs clear-to-load flips are what I wanted before buying Apex hacks.',
  },
  {
    id: '4',
    author: 'kiln',
    role: 'Duo queue',
    game: 'Apex Legends',
    rating: 5,
    datePublished: '2026-09-18',
    body: 'They rebuilt when other sellers still pushed dead loaders. We check status, then checkout — ESP held around ranked zones and hot drops.',
  },
  {
    id: '5',
    author: 'moss',
    role: 'Night pubs',
    game: 'Apex Legends',
    rating: 5,
    datePublished: '2026-09-18',
    body: 'Menu was easy. Stream-proof on, Distance ESP on. Setup guides covered antivirus and load order so we did not burn the first launch.',
  },
  {
    id: '6',
    author: 'vale',
    role: 'New buyer',
    game: 'Apex Legends',
    rating: 5,
    datePublished: '2026-09-17',
    body: '31-day key first was the right call. Instant delivery and live Easy Anti-Cheat status sold me before I took a longer plan.',
  },
  {
    id: '7',
    author: 'drake',
    role: 'Solo queue',
    game: 'Apex Legends',
    rating: 4,
    datePublished: '2026-09-17',
    body: 'Player ESP distance readouts were solid. Weapon ESP helped when a third party pushed from zone. Advanced Aimbot took ten minutes to dial in.',
  },
  {
    id: '8',
    author: 'echo',
    role: 'Wildcard regular',
    game: 'Apex Legends',
    rating: 5,
    datePublished: '2026-09-20',
    body: 'Loot ESP alone is worth it — no more wasting time on empty POIs while the ring closes. Nothing like the free junk I tried first.',
  },
  {
    id: '9',
    author: 'prism',
    role: 'Ranked tryhard',
    game: 'Apex Legends',
    rating: 4,
    datePublished: '2026-09-21',
    body: 'Advanced Aimbot looks legit even on a teammate spectate, as long as FOV and smoothing stay conservative. I still check status after every anti cheat note.',
  },
  {
    id: '10',
    author: 'blade',
    role: 'Three-stack',
    game: 'Apex Legends',
    rating: 5,
    datePublished: '2026-09-21',
    body: 'One license, full menu. ESP plus loot highlighting covered our Ranked and pubs runs. Support answered with the order ID the same day.',
  },
  {
    id: '11',
    author: 'orio',
    role: 'Windows 11',
    game: 'Apex Legends',
    rating: 3,
    datePublished: '2026-09-18',
    body: 'Loader ran fine after exclusions. Wish the first-run docs called out overlay conflicts earlier — lost an hour to Discord overlay.',
  },
  {
    id: '12',
    author: 'sage',
    role: 'PC pubs',
    game: 'Apex Legends',
    rating: 5,
    datePublished: '2026-09-20',
    body: 'Apex-only shop is a plus. No random filler titles. Worked on the current season client and the feature list matched the menu.',
  },
]

export function getReviewsAggregate() {
  const count = REVIEWS.length
  const ratingValue = (
    REVIEWS.reduce((sum, review) => sum + review.rating, 0) / count
  ).toFixed(1)
  return { ratingValue, reviewCount: count, bestRating: '5', worstRating: '1' }
}
