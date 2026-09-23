export type SeoMediaItem = {
  image: string
  video?: string
  alt: string
  title: string
  caption: string
  videoTitle?: string
  videoDescription?: string
}

/** Apex product art + menu stills (self-hosted). */
export const DAYZ_HERO = '/media/dayz-hero-full.webp'
export const DAYZ_SOLDIER = '/media/dayz-hero-full.webp'
export const DAYZ_COVER = '/media/dayz-cover.webp'
export const DAYZ_BOX = '/media/dayz-box.jpg'
export const DAYZ_ESP = '/media/dayz-esp-gameplay.gif'
export const DAYZ_MENU = '/media/dayz-menu.gif'
export const DAYZ_GAMEPLAY = '/media/dayz-esp-gameplay.gif'
export const DAYZ_HOME_ART = '/media/dayz-home-art.jpg'
export const DAYZ_CONTROL = '/media/dayz-control-art.jpg'
export const DAYZ_TACTICAL = '/media/dayz-tactical-art.jpg'
export const DAYZ_VIDEO_THUMB = '/media/dayz-video-thumb.jpg'

/** Self-hosted Apex Hacks preview (muted 10s loop from 0:28–0:38). */
export const DAYZ_HOME_VIDEO = {
  id: 'apex-hero-loop',
  src: '/videos/dayz-preview.mp4?v=hd1080',
  poster: DAYZ_VIDEO_THUMB,
  title: 'Apex Hacks Aimbot and ESP preview',
  caption: 'Preview of Apex Legends Aimbot, Player ESP, Weapon ESP and Loot ESP features on PC.',
} as const

export const PAGE_MEDIA = {
  home: {
    image: DAYZ_SOLDIER,
    alt: 'Apex hacks Aimbot and ESP product artwork for Apex Legends on PC',
    title: 'Apex Hacks for Apex Legends',
    caption: 'Feature overview for Apex Aimbot, Player ESP, Weapon ESP, Loot ESP and No Recoil.',
  },
  product: {
    image: DAYZ_COVER,
    video: DAYZ_HOME_VIDEO.src,
    alt: 'Apex ESP, Advanced Aimbot and loot highlight feature artwork',
    title: 'Apex Aimbot, ESP and EAC Bypass Features',
    caption: 'Product overview for Apex Legends on Windows PC.',
    videoTitle: DAYZ_HOME_VIDEO.title,
    videoDescription: DAYZ_HOME_VIDEO.caption,
  },
  forums: {
    image: DAYZ_HERO,
    alt: 'Apex hacks product artwork',
    title: 'Apex Hacks Guides',
    caption: 'Reference for setup, Aimbot, ESP, Ranked and Easy Anti-Cheat status articles.',
  },
  reviews: {
    image: DAYZ_ESP,
    alt: 'Apex hacks ESP gameplay review artwork',
    title: 'Apex Hacks Reviews',
    caption: 'Feature and compatibility feedback for Apex hacks.',
  },
  faq: {
    image: DAYZ_MENU,
    alt: 'Apex hacks menu artwork for the FAQ',
    title: 'Apex Hacks FAQ',
    caption: 'Compatibility, status and setup answers for Apex Legends.',
  },
  support: {
    image: DAYZ_HERO,
    alt: 'Apex hacks support artwork',
    title: 'Apex Hacks Support',
    caption: 'Delivery, loader and setup help for Apex hacks.',
  },
} as const satisfies Record<string, SeoMediaItem>

const FORUM_MEDIA: Record<string, SeoMediaItem> = {
  'features-list': { ...PAGE_MEDIA.product },
  hotkeys: { ...PAGE_MEDIA.forums },
  'complete-setup': { ...PAGE_MEDIA.product },
  'disable-antivirus': { ...PAGE_MEDIA.home },
  'undetected-status': { ...PAGE_MEDIA.product },
  'aimbot-settings': { ...PAGE_MEDIA.home },
  'esp-wallhack-guide': { ...PAGE_MEDIA.reviews },
  'radar-hack-guide': { ...PAGE_MEDIA.faq },
  'stream-proof-setup': { ...PAGE_MEDIA.forums },
  'battleye-status': { ...PAGE_MEDIA.product },
  'windows-setup': { ...PAGE_MEDIA.support },
  'raid-play-guide': {
    image: DAYZ_BOX,
    alt: 'Apex Legends Ranked and Battle Royale cheats artwork',
    title: 'Apex Ranked and Battle Royale Cheats Guide',
    caption: 'Ranked tips for Apex Aimbot, ESP and Distance ESP.',
  },
  'loader-errors': { ...PAGE_MEDIA.support },
}

export function getForumMedia(slug: string): SeoMediaItem {
  return FORUM_MEDIA[slug] || PAGE_MEDIA.forums
}
