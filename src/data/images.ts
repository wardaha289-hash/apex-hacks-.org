import { DAYZ_HERO, DAYZ_SOLDIER, DAYZ_COVER, DAYZ_MENU, DAYZ_ESP } from './media'
import { DAYZ_OG, getOgImageForPath, PAGE_OG } from './og'

export { DAYZ_OG, getOgImageForPath, PAGE_OG }
export { forumOgImage } from './og'

export const DAYZ_PRODUCT_HERO = DAYZ_HERO
export const DAYZ_PRODUCT_COVER = DAYZ_COVER

export type ImageSeoFields = {
  alt: string
  title: string
  caption: string
}

export const IMAGE_SEO: Record<
  string,
  ImageSeoFields & {
    heroAlt: string
    heroTitle: string
    heroCaption: string
  }
> = {
  apex: {
    alt: 'Apex hacks product artwork for Apex Legends on PC',
    title: 'Apex Hacks Product Details',
    caption: 'Apex Aimbot, Player ESP, Weapon ESP, Loot ESP, No Recoil and EAC compatibility',
    heroAlt: 'Apex hacks Advanced Aimbot and ESP features',
    heroTitle: 'Apex Hacks Features',
    heroCaption: 'Review Apex Aimbot, ESP, No Recoil and current Easy Anti-Cheat status',
  },
}

type PageImage = ImageSeoFields & { src: string; og: string }

/** On-page media + dedicated OG JPEG for Google SERP thumbnails. */
export const PAGE_IMAGES: Record<
  'home' | 'forums' | 'reviews' | 'faq' | 'support' | 'product',
  PageImage
> = {
  home: {
    src: DAYZ_SOLDIER,
    og: PAGE_OG.home,
    alt: 'Apex hacks Aimbot and ESP artwork for Apex Legends on PC',
    title: 'Apex Hacks',
    caption: 'Apex Aimbot, Player ESP, Weapon ESP and No Recoil overview.',
  },
  forums: {
    src: DAYZ_HERO,
    og: PAGE_OG.forums,
    alt: 'Apex hacks product artwork',
    title: 'Apex Hacks Guides',
    caption: 'Setup, Aimbot and ESP guides for Apex Legends.',
  },
  reviews: {
    src: DAYZ_ESP,
    og: PAGE_OG.reviews,
    alt: 'Apex hacks review artwork',
    title: 'Apex Hacks Reviews',
    caption: 'Feature and compatibility feedback for Apex Legends.',
  },
  faq: {
    src: DAYZ_MENU,
    og: PAGE_OG.faq,
    alt: 'Apex hacks FAQ artwork',
    title: 'Apex Hacks FAQ',
    caption: 'Compatibility, feature and setup answers for Apex Legends.',
  },
  support: {
    src: DAYZ_HERO,
    og: PAGE_OG.support,
    alt: 'Apex hacks support artwork',
    title: 'Apex Hacks Support',
    caption: 'Delivery, loader and setup support for Apex hacks.',
  },
  product: {
    src: DAYZ_COVER,
    og: PAGE_OG.product,
    alt: 'Apex Aimbot ESP and EAC Bypass product artwork',
    title: 'Apex Hacks Features',
    caption: 'Product details for Apex Aimbot and ESP.',
  },
}

export function getGameImage(_slug: string): string {
  return DAYZ_PRODUCT_COVER
}

export function getProductHeroImage(_slug: string): string {
  return DAYZ_PRODUCT_COVER
}

export function getOgImage(path?: string): string {
  return getOgImageForPath(path)
}

export function getPageImage(key: keyof typeof PAGE_IMAGES) {
  return PAGE_IMAGES[key]
}

export function getImageAlt(
  slug: string,
  name: string,
  variant: 'catalog' | 'product' = 'catalog',
): string {
  const seo = IMAGE_SEO[slug]
  if (seo) return variant === 'product' ? seo.heroAlt : seo.alt
  return variant === 'product' ? `${name} product details` : `${name} product artwork`
}

export function getImageTitle(
  slug: string,
  name: string,
  variant: 'catalog' | 'product' = 'catalog',
): string {
  const seo = IMAGE_SEO[slug]
  if (seo) return variant === 'product' ? seo.heroTitle : seo.title
  return `${name} product`
}
