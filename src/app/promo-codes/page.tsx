import type { Metadata } from "next";
import PromoCodesLayout from "./layout";

export const metadata: Metadata = {
  title: "CS2 Promo Codes | SmurfCodes",
  description:
    "Discover the latest CS2 promo codes for free skins, cases, and more. Learn how to redeem codes and enhance your Counter-Strike 2 experience with CS2FREE.",
  keywords: [
    "CS2",
    "promo codes",
    "free skins",
    "free cases",
    "Counter-Strike 2",
    "CS2FREE",
  ],
  openGraph: {
    title: "CS2 Promo Codes | Get Free Skins and Cases | SmurfCodes",
    description:
      "Discover the latest CS2 promo codes for free skins, cases, and more. Learn how to redeem codes and enhance your Counter-Strike 2 experience with CS2FREE.",
    type: "website",
    url: "https://cs2free.com/promo-codes",
    images: [
      {
        url: "https://cs2free.com/images/cs2-promo-codes-og.jpg",
        width: 1200,
        height: 630,
        alt: "CS2 Promo Codes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CS2 Promo Codes | Get Free Skins and Cases | SmurfCodes",
    description:
      "Discover the latest CS2 promo codes for free skins, cases, and more. Learn how to redeem codes and enhance your Counter-Strike 2 experience with CS2FREE.",
    images: ["https://cs2free.com/images/cs2-promo-codes-og.jpg"],
  },
  icons: {
    icon: "/photos/new-logo1.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function PromoCodesPage() {
  return <PromoCodesLayout />;
}
