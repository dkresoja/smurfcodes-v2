"use client";
import Footer from "@/components/Footer";
import HeroPromoCodes from "@/components/HeroPromoCodes";
import Navbar from "@/components/Navbar";
import PromoCodesHow from "@/components/PromoCodesHow";

import AllPromoCodes from "@/components/allPromoCodes";

export default function PromoCodesPage() {
  return (
    <main className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <HeroPromoCodes />

      <AllPromoCodes />
      <PromoCodesHow />
      <Footer />
    </main>
  );
}
