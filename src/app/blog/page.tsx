"use client";
import BlogLanding from "@/components/BlogLanding";
import BlogHeader from "@/components/BlogHeader";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export default function PromoCodesPage() {
  return (
    <main className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <BlogHeader />
      <div className="w-3/4 flex">
        <hr></hr>
      </div>

      <BlogLanding />
      <Footer />
    </main>
  );
}
