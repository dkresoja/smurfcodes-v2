"use client";

import Footer from "@/components/Footer";
import GiveawayPage from "@/components/giveaway-page";
import GiveawayHero from "@/components/GiveawayHero";
import Navbar from "@/components/Navbar";
import { useState } from "react";
export default function PromoCodesPage() {
  const [click, setClick] = useState(false);
  const handleClickHamburger = () => {
    setClick(!click);
  };
  return (
    <main className="min-h-screen bg-gray-900 text-white">
      <Navbar handleClickHamburger={handleClickHamburger} click={click} />
      <GiveawayHero />
      <div className="w-3/4 flex">
        <hr></hr>
      </div>
      <GiveawayPage />
      <Footer />
    </main>
  );
}
