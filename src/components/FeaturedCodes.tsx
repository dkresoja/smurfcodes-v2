"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { AnimatedCard } from "@/components/AnimatedCard";
import { AnimatedButton } from "@/components/AnimatedButton";
import { PromoCard } from "@/types/PromoCard";
import Link from "next/link";

const promoCards: PromoCard[] = [
  {
    id: 1,
    site: "https://plg.bet/?r=CS2FR",
    logo: "/photos/site-logos/csgopolygonlogo.png",
    title: "FREE 0.50$ | NO DEPOSIT REQUIRED",
    promoCode: "CS2FR",
    validUntil: "Valid as today",
  },
  {
    id: 2,
    site: "https://csgoempire.com/r/CS2FR",
    logo: "/photos/site-logos/csgoempire.png",
    title: "FREE CASE | NO DEPOSIT REQUIRED",
    promoCode: "CS2FR",
    validUntil: "Valid as today",
  },
  {
    id: 3,
    site: "https://key-drop.com/?code=CS2FR",
    logo: "/photos/site-logos/keydrop.png",
    title: "FREE 0.50$ | NO DEPOSIT REQUIRED",
    promoCode: "CS2FR",
    validUntil: "Valid as today",
  },
  {
    id: 4,
    site: "https://csgoroll.com/r/PAXFUN",
    logo: "/photos/site-logos/csgoroll.png",
    title: "3 FREE CASES | NO DEPOSIT REQUIRED",
    promoCode: "PAXFUN",
    validUntil: "Valid as today",
  },
];

export default function PromoCarousel() {
  return (
    <div className="w-full px-4 py-8 xl:pt-0  xl:pb-20 bg-black  mx-auto xl:flex xl:justify-center">
      <div className="xl:w-2/3">
        <span className="text-3xl xl:text-4xl xl:mb-12 font-bold text-white mb-6 mt-12 px-4 flex gap-2 ">
          <h2>Our</h2>
          <h2 className="text-cyan-500">Popular</h2>
          <h2>Codes</h2>
        </span>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full touch-pan-y"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {promoCards.map((card, i) => (
              <CarouselItem
                key={card.id}
                className="pl-2 md:pl-4 sm:basis-1/2 md:basis-1/3 lg:basis-1/4 "
              >
                <div
                  key={i}
                  className="object-cover hover:scale-105 transition-all duration-500 pt-2 px-2 opacity-80 hover:opacity-100"
                >
                  <AnimatedCard card={card} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="mt-6 text-center">
          <Link href="/promo-codes" passHref>
            <AnimatedButton className="bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded">
              See more
            </AnimatedButton>
          </Link>
        </div>
      </div>
    </div>
  );
}
