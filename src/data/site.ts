import { DAYZ_OG } from './images'
import { PAGE_OG } from './og'

export const SITE_URL = 'https://apexhacks.org'
export const SITE_NAME = 'Apex Hacks'
export const SITE_HOST = 'apexhacks.org'

/**
 * Sole purpose — used in schema + about copy.
 * Single-product site: Apex hacks / Apex Legends cheats for PC (worldwide).
 * Canonical host is apex https://apexhacks.org (www 301s to apex in the Worker).
 */
export const SITE_PURPOSE =
  'Buy Apex hacks for Apex Legends on Windows PC — Advanced Aimbot, Player ESP, Weapon ESP, Health Bar, Distance ESP, Box ESP, Skeleton ESP, Loot ESP, No Recoil, EAC Bypass and Stream Proof with instant digital delivery.'

export const SITE_ABOUT = [
  'Apex hacks',
  'Apex Legends',
  'Apex Legends game',
  'Apex Legends PC',
  'Apex Legends aimbot',
  'Apex Legends ESP',
  'Apex Legends wallhack',
  'Apex Legends Ranked',
  'Apex Legends anti cheat',
  'Apex Legends cheating',
  'EAC Bypass',
] as const

/** Offer price shown on product schema + purchase UI. */
export const PRODUCT_PRICE_USD = '35'

export const SEO_REGIONS = [
  { hreflang: 'en', label: 'English' },
  { hreflang: 'x-default', label: 'Default' },
] as const

export const OG_IMAGE = DAYZ_OG

export type PageSeo = {
  title: string
  description: string
  path: string
  ogType?: 'website' | 'article' | 'product'
  /** Prefer /og/*.jpg (1200x630) for Google SERP thumbnails */
  image?: string
  imageAlt?: string
  robots?: string
}

const INDEX_ROBOTS =
  'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'

export const SEO = {
  home: {
    title: 'Apex Hacks | Apex Legends Aimbot, ESP & Hacks',
    description:
      'Buy Apex hacks for Apex Legends — Advanced Aimbot, Player ESP, Weapon ESP, Loot ESP, No Recoil and Stream Proof from $35. Check live EAC status, then checkout.',
    path: '/',
    ogType: 'website',
    image: PAGE_OG.home,
    imageAlt: 'Apex Hacks — Apex Legends Aimbot, ESP and EAC Bypass for PC',
    robots: INDEX_ROBOTS,
  },
  forums: {
    title: 'Apex Hacks Guides | Aimbot, ESP, Ranked & Status',
    description:
      'Apex hacks guides hub — Advanced Aimbot, Player ESP, Weapon ESP, Ranked settings, antivirus exclusions, loader setup and Easy Anti-Cheat status articles before you buy.',
    path: '/forums',
    ogType: 'website',
    image: PAGE_OG.forums,
    imageAlt: 'Apex Hacks setup guides for Aimbot, ESP and EAC',
    robots: INDEX_ROBOTS,
  },
  reviews: {
    title: 'Apex Hacks Reviews | Buyer Feedback on Apex Legends',
    description:
      'Read Apex hacks reviews covering Advanced Aimbot, Player ESP, Loot ESP and Easy Anti-Cheat rebuilds before you buy an Apex Legends license for PC.',
    path: '/reviews',
    ogType: 'website',
    image: PAGE_OG.reviews,
    imageAlt: 'Apex Hacks buyer reviews for Apex Legends',
    robots: INDEX_ROBOTS,
  },
  faq: {
    title: 'Apex Hacks FAQ | Price, EAC Status & Setup',
    description:
      'FAQ for buying Apex hacks on Windows PC — price, Aimbot and ESP features, Easy Anti-Cheat status, Ranked support, loader setup and delivery.',
    path: '/faq',
    ogType: 'website',
    image: PAGE_OG.faq,
    imageAlt: 'Apex Hacks FAQ — price, EAC and setup',
    robots: INDEX_ROBOTS,
  },
  support: {
    title: 'Apex Hacks Support | Loader, Delivery & Setup Help',
    description:
      'Get help buying and loading Apex hacks — delivery email, Windows setup, antivirus exclusions, loader errors and Easy Anti-Cheat status updates.',
    path: '/support',
    ogType: 'website',
    image: PAGE_OG.support,
    imageAlt: 'Apex Hacks support for loader and delivery help',
    robots: INDEX_ROBOTS,
  },
  product: {
    title: 'Apex Hacks Price & Checkout | Aimbot, ESP, EAC',
    description:
      'Apex hacks price and checkout — Advanced Aimbot, Player ESP, Weapon ESP, Loot ESP, No Recoil, EAC Bypass and Stream Proof from $35.',
    path: '/apex-hacks',
    ogType: 'product',
    image: PAGE_OG.product,
    imageAlt: 'Apex Legends Aimbot, ESP and EAC Bypass product details',
    robots: INDEX_ROBOTS,
  },
} as const satisfies Record<string, PageSeo>

export const HOME_HEADINGS = {
  h1: 'Apex Hacks — Apex Legends Aimbot, ESP & Hacks',
  h2Features: 'Apex Aimbot, Player ESP, Weapon ESP & No Recoil',
  h2Featured: 'Apex Legends ESP and Advanced Aimbot',
  h2About: 'Clear EAC status before you buy Apex hacks',
  h2Access: 'Buy Apex Hacks',
  h2Faq: 'Apex Hacks FAQ',
} as const

export function absoluteUrl(path: string) {
  if (!path || path === '/') return `${SITE_URL}/`
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`
}
