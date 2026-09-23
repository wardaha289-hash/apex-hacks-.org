export type FaqItem = {
  q: string
  a: string
}

/** Master FAQ — visible on /faq and reused in sections. */
export const SITE_FAQS: FaqItem[] = [
  {
    q: 'What are Apex Hacks?',
    a: 'Apex Hacks are Apex Legends tools on apexhacks.org — Advanced Aimbot, Player ESP, Weapon ESP, Health Bar, Distance ESP, Box ESP, Skeleton ESP, Loot ESP, No Recoil, EAC Bypass and Stream Proof — with live Easy Anti-Cheat status after game patches.',
  },
  {
    q: 'How much do Apex hacks cost?',
    a: `Apex hacks start from $35 for 31 days of access. Longer licenses cost more. Always confirm live Easy Anti-Cheat status and the price on apexhacks.org before checkout.`,
  },
  {
    q: 'Do you sell hacks for other games?',
    a: 'No. apexhacks.org sells Apex hacks / Apex Legends cheats only — one product, no multi-game catalog.',
  },
  {
    q: 'Is Aimbot the main feature?',
    a: 'Aimbot is optional. Most buyers lead with Player ESP, Weapon ESP, Health Bar and Distance ESP, then enable Advanced Aimbot or No Recoil only if they want it.',
  },
  {
    q: 'How do you handle Easy Anti-Cheat updates?',
    a: 'We publish live clear-to-load or Updating labels after Apex Legends and Easy Anti-Cheat patches. Always check status on apexhacks.org before you load.',
  },
  {
    q: 'What is Apex Legends ESP / wallhack?',
    a: 'Player ESP and wallhack show squads through walls with Box ESP, Skeleton ESP, Distance ESP and Health Bar when supported. Weapon ESP and Loot ESP highlight loadouts, armor and high-tier loot so empty buildings stop wasting your time.',
  },
  {
    q: 'What is Weapon ESP and Distance ESP?',
    a: 'Weapon ESP reads enemy loadouts before you peek. Distance ESP shows range on every contact so you take fights that match your gun — useful in Battle Royale, Ranked, Unranked and Wildcard.',
  },
  {
    q: 'What features are included?',
    a: 'Advanced Aimbot, Player ESP, Weapon ESP, Health Bar, Distance ESP, Box ESP, Skeleton ESP, Loot ESP, No Recoil, EAC Bypass and Stream Proof — Apex Legends on Windows PC only. See the Features Checklist guide for the full list.',
  },
  {
    q: 'Do Apex Hacks work in Ranked and pubs?',
    a: 'Yes. The cheats run in Apex Legends Battle Royale, Ranked, Unranked and Wildcard on the current PC client. Always confirm live EAC status before a Ranked session.',
  },
  {
    q: 'How do I buy Apex hacks?',
    a: 'Start on the homepage, confirm live Easy Anti-Cheat status and review the price from $35. Open Product details for compatibility and features, then continue to checkout for digital delivery.',
  },
  {
    q: 'How do I load Apex Hacks?',
    a: 'After checkout, follow the Complete Setup forum thread for the current load order. If status is Updating, wait rather than forcing an outdated build.',
  },
  {
    q: 'Where do I get Apex Hacks support?',
    a: 'Use the Support page and your checkout order channel. Include current Easy Anti-Cheat status and whether you need load, menu or delivery help.',
  },
  {
    q: 'Where can I read Apex Hacks reviews?',
    a: 'Player reviews with ratings are on the Reviews page. They cover ESP usefulness, status honesty and patch survival before you buy.',
  },
  {
    q: 'What is your refund policy?',
    a: 'Digital licenses follow the Refunds page — delivery failures and extended Updating windows can qualify; change of mind after a working key does not.',
  },
  {
    q: 'Is this the official Apex Legends site?',
    a: 'No. We sell Apex Hacks only. Buy and play the game from EA or Steam. We are not affiliated with Electronic Arts, Respawn Entertainment or Apex Legends.',
  },
]

/** Commercial questions shown on the homepage; FAQ schema lives on /faq only. */
export const HOME_FAQS: FaqItem[] = [
  SITE_FAQS[1],
  SITE_FAQS[4],
  SITE_FAQS[5],
  SITE_FAQS[9],
]

export const PRODUCT_PAGE_FAQS: FaqItem[] = [
  SITE_FAQS[1],
  SITE_FAQS[4],
  SITE_FAQS[5],
  SITE_FAQS[6],
  SITE_FAQS[9],
  SITE_FAQS[11],
]
