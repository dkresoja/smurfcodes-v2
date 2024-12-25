"use client";

import { AnimatedCard } from "@/components/AnimatedCard";

interface PromoCard {
  id: number;
  site: string;
  logo: string;
  title: string;
  promoCode: string;
  validUntil: string;
}

const promoCards: PromoCard[] = [
  {
    id: 1,
    site: "https://plg.bet/?r=CS2FR",
    logo: "/photos/site-logos/csgopolygonlogo.png",
    title: "FREE 1000 COINS & FREE RAKEBACK",
    promoCode: "CS2FR",
    validUntil: "Valid as today",
  },
  {
    id: 2,
    site: "https://csgoempire.com/r/CS2FR",
    logo: "/photos/site-logos/csgoempire.png",
    title: "FREE SKINS & FREE CASES NO DEPOSIT",
    promoCode: "CS2FR",
    validUntil: "Valid as today",
  },
  {
    id: 3,
    site: "https://rollbit.com/referral/CS2FR",
    logo: "/photos/site-logos/rollbit.png",
    title: "FREE COINS NO DEPOSIT REQUIRED",
    promoCode: "CS2FR",
    validUntil: "Valid as today",
  },
  {
    id: 4,
    site: "https://csgoroll.com/r/PAXFUN",
    logo: "/photos/site-logos/csgoroll.png",
    title: "3 FREE CASES & 5% DEPOSIT BONUS",
    promoCode: "PAXFUN",
    validUntil: "Valid as today",
  },
  {
    id: 5,
    site: "https://key-drop.com/?code=CS2FR",
    logo: "/photos/site-logos/keydrop.png",
    title: "0.50$ FREE & 10% BONUS ON DEPOSITS",
    promoCode: "CS2FR",
    validUntil: "Valid as today",
  },
  {
    id: 6,
    site: "https://csgoluck.com/r/CS2FR",
    logo: "/photos/site-logos/csgoluck.png",
    title: "FREE CASES & FREE COINS FOR BETS",
    promoCode: "CS2FR",
    validUntil: "Valid as today",
  },
  {
    id: 7,
    site: "https://farmskins.com/ref-CS2FR",
    logo: "/photos/site-logos/farmskins.png",
    title: "FREE 0.90$ & DEPOSIT BONUSES",
    promoCode: "CS2FR",
    validUntil: "Valid as today",
  },
  {
    id: 8,
    site: "https://500.casino/r/CS2FR",
    logo: "/photos/site-logos/500-casino.png",
    title: "FREE SPINS & DEPOSIT BONUSES",
    promoCode: "CS2FR",
    validUntil: "Valid as today",
  },
  {
    id: 9,
    site: "https://csgofast.com?ref=CS2FR",
    logo: "/photos/site-logos/csgofast.png",
    title: "FREE VALID BONUS & DEPOSIT BONUSES",
    promoCode: "CS2FR",
    validUntil: "Valid as today",
  },
  {
    id: 10,
    site: "https://csgocases.com/r/CS2FR",
    logo: "/photos/site-logos/csgocases.png",
    title: "FREE 1$ & FREE CASES NO DEPOSIT",
    promoCode: "CS2FR",
    validUntil: "Valid as today",
  },
  {
    id: 11,
    site: "https://datdrop.com/p/CS2FR",
    logo: "/photos/site-logos/datdrop.png",
    title: "FREE CASES & DEPOSIT BONUSES",
    promoCode: "CS2FR",
    validUntil: "Valid as today",
  },
  {
    id: 12,
    site: "https://rustyloot.gg/r/CS2FR",
    logo: "/photos/site-logos/rustyloot.png",
    title: "FREE 2$ & FREE 3 CASES NO DEPOSIT",
    promoCode: "CS2FR",
    validUntil: "Valid as today",
  },
];

export default function PromoCarousel() {
  return (
    <div className="w-full px-4 py-8 flex justify-center bg-black">
      <div className="grid w-3/4 gap-6 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
        {promoCards.map((card, i) => (
          <AnimatedCard key={i + 1} card={card} />
        ))}
      </div>
    </div>
  );
}
