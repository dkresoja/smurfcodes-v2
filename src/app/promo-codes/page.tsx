"use client";
import Footer from "@/components/Footer";
import HeroPromoCodes from "@/components/HeroPromoCodes";
import Navbar from "@/components/Navbar";
import PromoCodesHow from "@/components/PromoCodesHow";

import AllPromoCodes from "@/components/allPromoCodes";
import { useState } from "react";

export default function PromoCodesPage() {
  const [click, setClick] = useState(false);
  const handleClickHamburger = () => {
    setClick(!click);
  };
  return (
    <main className="min-h-screen bg-gray-900 text-white">
      <Navbar handleClickHamburger={handleClickHamburger} click={click} />
      <HeroPromoCodes />

      <AllPromoCodes />
      <PromoCodesHow />
      <Footer />
    </main>
  );
}
