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
    default: "SmurfCodes - Your Ultimate CS2 Promo Codes Resource",
    template: "%s | SmurfCodes",
  },
  description:
    "SmurfCodes provides the latest Counter-Strike 2 (CS2) promo codes, expert guides, and top resources to unlock free skins, level up your gameplay, and dominate the competition.",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://smurfcodes.com",
    siteName: "SmurfCodes",
    images: [
      {
        url: "https://smurfcodes.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SmurfCodes - Your Ultimate CS2 Promo Codes Resource",
      },
    ],
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
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
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
