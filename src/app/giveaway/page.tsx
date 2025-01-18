import type { Metadata } from "next";
import PromoCodesLayout from "./layout";

export const metadata: Metadata = {
  title: "Giveaways | SmurfCodes",
  description:
    "Get the latest CS2 promo codes and participate in exclusive giveaways. Enhance your gaming experience with free skins, cases, and more!",
  keywords: [
    "CS2",
    "promo codes",
    "giveaways",
    "free skins",
    "cases",
    "Counter-Strike",
  ],
  openGraph: {
    title: "Giveaways | SmurfCodes",
    description:
      "Get the latest CS2 promo codes and participate in exclusive giveaways. Enhance your gaming experience with free skins, cases, and more!",
    type: "website",
    url: "https://smurfcodes.com/giveaway",
    images: [
      {
        url: "https://cs2free.com/images/promo-codes-og.jpg",
        width: 1200,
        height: 630,
        alt: "CS2 Promo Codes and Giveaways",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Giveaways | SmurfCodes",
    description:
      "Get the latest CS2 promo codes and participate in exclusive giveaways. Enhance your gaming experience with free skins, cases, and more!",
    images: ["https://cs2free.com/images/promo-codes-og.jpg"],
  },
};

export default function PromoCodesPage() {
  return <PromoCodesLayout />;
}
