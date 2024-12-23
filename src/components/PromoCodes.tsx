// "use client";
// import { Button } from "@/components/ui/button";

// const sites = [
//   {
//     name: "CSGOPOLYGON",
//     logo: "/photos/site-logos/csgopolygonlogo.png",
//     bonus: "FREE 1000 COINS & FREE RAKEBACK",
//     code: "CS2FR",
//   },
//   {
//     name: "CSGOEMPIRE",
//     logo: "/photos/site-logos/csgoempire.png",
//     bonus: "FREE SKINS & FREE CASES",
//     code: "CS2FR",
//   },
//   {
//     name: "500 CASINO",
//     logo: "/photos/site-logos/500-casino.png",
//     bonus: "FREE SPINS & DEPOSIT BONUS",
//     code: "CS2FR",
//   },
//   {
//     name: "ROLLBIT",
//     logo: "/photos/site-logos/rollbit.png",
//     bonus: "FREE COINS NO DEPOSIT REQUIRED",
//     code: "CS2FR",
//   },
//   {
//     name: "KEYDROP",
//     logo: "/photos/site-logos/keydrop.png",
//     bonus: "0.50$ FREE & 10% BONUS ON DEPOSITS",
//     code: "CS2FR",
//   },
//   {
//     name: "CSGOFAST",
//     logo: "/photos/site-logos/csgofast.png",
//     bonus: "FREE BONUS & DEPOSIT BONUSES",
//     code: "CS2FR",
//   },
//   {
//     name: "CS:GO ROLL",
//     logo: "/photos/site-logos/csgoroll.png",
//     bonus: "3 FREE CASES & 5% DEPOSIT BONUS",
//     code: "PAXFUN",
//   },
//   {
//     name: "CSGO LUCK",
//     logo: "/photos/site-logos/csgoluck.png",
//     bonus: "FREE CASES & FREE COINS FOR BETS",
//     code: "CS2FR",
//   },
// ];

// export default function BettingSites() {
//   return (
//     <section className="py-16 bg-gray-900">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl font-bold mb-8 text-center text-white">
//           CSGO PROMO CODES
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {sites.map((site) => (
//             <div
//               key={site.name}
//               className="bg-gray-800 rounded-lg overflow-hidden flex"
//             >
//               <div className="flex-grow p-4 relative">
//                 <div className="flex items-center mb-2">
//                   <img className="w-full h-20" src={site.logo}></img>
//                 </div>
//                 <p className="text-sm text-gray-300 text-l font-semibold mb-2">
//                   {site.bonus}
//                 </p>
//                 <p
//                   className="text-md text-gray-400 mb-4 cursor-pointer hover:text-gray-200"
//                   onClick={() => {
//                     navigator.clipboard.writeText(site.code);
//                     alert("Code copied: " + site.code); // Opcionalno, obaveštenje korisniku
//                   }}
//                 >
//                   CODE: {site.code}
//                 </p>

//                 <div className="flex gap-2">
//                   <Button
//                     variant="secondary"
//                     className="bg-cyan-500 hover:bg-cyan-600 text-white"
//                   >
//                     CLAIM BONUS
//                   </Button>
//                   <Button
//                     variant="secondary"
//                     className=" bg-transparent border-cyan-500 border-2 hover:bg-cyan-600  text-white"
//                   >
//                     MORE INFO
//                   </Button>
//                 </div>
//               </div>
//               <div className="w-10 bg-gray-700 flex items-center justify-center">
//                 <span className="transform -rotate-90 text-cyan-500 font-bold whitespace-nowrap">
//                   {site.name}
//                 </span>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { AnimatedCard } from "@/components/AnimatedCard";

interface PromoCard {
  id: number;
  logo: string;
  title: string;
  promoCode: string;
  validUntil: string;
}

const promoCards: PromoCard[] = [
  {
    id: 1,
    logo: "/photos/site-logos/csgopolygonlogo.png",
    title: "FREE 1000 COINS & FREE RAKEBACK",
    promoCode: "CS2FR",
    validUntil: "Valid as today",
  },
  {
    id: 2,
    logo: "/photos/site-logos/csgoempire.png",
    title: "FREE SKINS & FREE CASES NO DEPOSIT",
    promoCode: "CS2FR",
    validUntil: "Valid as today",
  },
  {
    id: 3,
    logo: "/photos/site-logos/rollbit.png",
    title: "FREE COINS NO DEPOSIT REQUIRED",
    promoCode: "CS2FR",
    validUntil: "Valid til 2024",
  },
  {
    id: 4,
    logo: "/photos/site-logos/csgoroll.png",
    title: "3 FREE CASES & 5% DEPOSIT BONUS",
    promoCode: "PAXFUN",
    validUntil: "Valid til 2024",
  },
];

export default function PromoCarousel() {
  return (
    <div className="w-full px-4 py-8 xl:pt-0 bg-gradient-to-b xl:pb-20 from-black to-gray-900 mx-auto xl:flex xl:justify-center">
      <div className="xl:w-2/3">
        <span className="text-3xl xl:text-4xl xl:mb-12 font-bold text-white mb-6 mt-12 px-4 flex gap-2">
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
            {promoCards.map((card) => (
              <CarouselItem
                key={card.id}
                className="pl-2 md:pl-4 sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
              >
                <AnimatedCard card={card} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="mt-6 text-center">
          <Button className="bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded">
            See more
          </Button>
        </div>
      </div>
    </div>
  );
}
