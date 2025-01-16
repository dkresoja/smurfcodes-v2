import { Geist, Azeret_Mono as Geist_Mono } from "next/font/google";
import "./globals.css";
import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";

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
    "SmurfCodes offers the latest Counter-Strike 2 (CS2) promo codes, guides, and resources to enhance your gaming experience and get free skins.",
  keywords: [
    "CS2",
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
  // manifest: "/site.webmanifest",
  // verification: {
  //   google: "your-google-site-verification-code",
  //   yandex: "your-yandex-verification-code",
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
