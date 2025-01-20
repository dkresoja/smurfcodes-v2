import { Geist, Azeret_Mono as Geist_Mono } from "next/font/google";
import "./globals.css";
import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { Analytics } from "@vercel/analytics/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://smurfcodes.com"),
  title: {
    default: "SmurfCodes - Exclusive CS2 Promo Codes",
    template: "%s - SmurfCodes",
  },
  description:
    "Here you can find best active Counter-Strike 2 (CS2) promo codes, expert guides, and top resources to unlock free CS2 skins, level up your inventory, and unlock full potential.",
  keywords: [
    "CS2",
    "free cs go skins",
    "free csgo skins",
    "csgo promo codes",
    "cs2 free skins",
    "cs2 promo codes",
    "Counter-Strike 2",
    "promo codes",
    "free skins",
    "gaming guides",
    "SmurfCodes",
  ],
  authors: [{ name: "SmurfCodes Team" }],
  creator: "SmurfCodes",
  publisher: "SmurfCodes",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  twitter: {
    card: "summary_large_image",
    site: "@smurfcodes",
    creator: "@smurfcodes",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "48x48",
        type: "image/x-icon",
      },
    ],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <JsonLd />
          {children}
        </body>
      </html>
      <Analytics />
    </>
  );
}
