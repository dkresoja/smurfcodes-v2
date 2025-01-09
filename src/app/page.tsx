"use client";
import Hero from "../components/Hero";
import TryingSection from "../components/TryingSection";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import FeaturedCodes from "@/components/FeaturedCodes";
import Blog from "@/components/Blog";
import Safety from "@/components/Safety";
import TextSection from "@/components/TextSection";
import Awards from "@/components/Awards";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white ">
      <Navbar />
      <Hero />
      <Safety />
      <FeaturedCodes />
      <TryingSection />
      <TextSection />
      <Blog />
      <Awards />
      <Footer />
    </main>
  );
}
