export type GameStatus = 'Undetected' | 'Updating' | 'Use with caution'

export type Game = {
  slug: string
  name: string
  status: GameStatus
  popular?: boolean
}

/** Site is Apex hacks only — no other titles in the catalog. */
export const GAMES: Game[] = [
  { slug: 'apex', name: 'Apex Legends', status: 'Undetected', popular: true },
]

export function getGame(slug: string) {
  return GAMES.find((g) => g.slug === slug)
}

export function guidePath(_slug?: string) {
  return '/apex-hacks'
}

export function parseGuideSlug(param: string) {
  const lower = param.toLowerCase()
  if (lower === 'apex-hacks' || lower === 'apex-cheats' || lower === 'apex') return 'apex'
  return lower.endsWith('-cheats')
    ? lower.slice(0, -7)
    : lower.endsWith('-hacks')
      ? lower.slice(0, -6)
      : lower
}

export const GUIDE_FEATURES = [
  {
    name: 'Player ESP',
    text: 'See squads through walls, smoke and buildings with boxes, names and team context so third parties stop surprising you in Battle Royale and Ranked.',
  },
  {
    name: 'Advanced Aimbot',
    text: 'FOV, smoothing and bone selection for Apex Legends aim settings that still look human — fire near a target and the tracking stays controlled instead of robotic.',
  },
  {
    name: 'Weapon ESP',
    text: 'Read enemy loadouts before you peek so you know whether they are holding a sniper, SMG or shotgun on the next angle.',
  },
  {
    name: 'Health Bar',
    text: 'Track health and EVO armor state through cover so you commit only when a knock is actually available.',
  },
  {
    name: 'Distance ESP',
    text: 'Range readouts on every contact so you stop swinging 200m fights and take peeks that match your weapon.',
  },
  {
    name: 'Box ESP',
    text: 'Clean 2D boxes on legends through walls — readable at ADS without flooding the HUD on busy Ranked rotations.',
  },
  {
    name: 'Skeleton ESP',
    text: 'Bone overlays for movement reads through smoke, doors and Replicator cover when a box alone is not enough.',
  },
  {
    name: 'Loot ESP',
    text: 'Highlight weapons, attachments, armor, EVO caches and high-tier loot so empty buildings stop wasting your time.',
  },
  {
    name: 'No Recoil',
    text: 'Stabilize spray on Apex Legends weapons so mid-range SMG and AR fights stay on target without fighting the pattern.',
  },
  {
    name: 'EAC Bypass',
    text: 'Easy Anti-Cheat compatible loader with live clear-to-load or Updating status after Apex Legends anti cheat updates.',
  },
  {
    name: 'Stream Proof',
    text: 'Keep supported overlays out of OBS and common capture tools so clips and streams do not flash ESP.',
  },
] as const

/** @deprecated use PRODUCT_PAGE_FAQS from faqs.ts — kept as alias */
export { PRODUCT_PAGE_FAQS as PRODUCT_FAQS } from './faqs'
