"use client";

import Footer from "@/components/Footer";
import GiveawayPage from "@/components/giveaway-page";
import GiveawayHero from "@/components/GiveawayHero";
import Navbar from "@/components/Navbar";

export default function PromoCodesPage() {
  return (
    <main className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <GiveawayHero />
      <div className="w-3/4 flex">
        <hr></hr>
      </div>
      <GiveawayPage />
      <Footer />
    </main>
  );
}
