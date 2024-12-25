"use client";
import BlogLanding from "@/components/BlogLanding";
import BlogHeader from "@/components/BlogHeader";
import { useState } from "react";
import Navbar from "@/components/Navbar";
export default function PromoCodesPage() {
  const [click, setClick] = useState(false);
  const handleClickHamburger = () => {
    setClick(!click);
  };
  return (
    <main className="min-h-screen bg-gray-900 text-white">
      <Navbar handleClickHamburger={handleClickHamburger} click={click} />
      <BlogHeader />
      <div className="w-3/4 flex">
        <hr></hr>
      </div>

      <BlogLanding />
    </main>
  );
}
