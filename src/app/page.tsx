"use client";
import Hero from "../components/Hero";
import TryingSection from "../components/TryingSection";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useState } from "react";
import FeaturedCodes from "@/components/FeaturedCodes";
import Blog from "@/components/Blog";
import Safety from "@/components/Safety";
import TextSection from "@/components/TextSection";

export default function Home() {
  const [click, setClick] = useState(false);
  const handleClickHamburger = () => {
    setClick(!click);
  };
  return (
    <main className="min-h-screen bg-black text-white ">
      <Navbar handleClickHamburger={handleClickHamburger} click={click} />
      <Hero />
      <Safety />
      <FeaturedCodes />
      <TryingSection />
      <TextSection />
      <Blog />
      <Footer />
    </main>
  );
}
