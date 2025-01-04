"use client";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const NAVBAR_DATA = {
    links: [
      { name: "Home", href: "/" },
      { name: "Promo codes", href: "/contact" },
      { name: "Giveaways", href: "/about" },
      { name: "Blog", href: "/blog" },
    ],
  };

  return (
    <footer className="bg-black py-6 flex flex-col items-center border-t-2 border-slate-800">
      {/* Navigacija */}

      {/* Logo i 18+ */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl px-4 gap-12">
        {/* Logo */}
        <div className="flex items-center mr-10 ">
          <Image
            src="/photos/new-logo1.png"
            alt="Sharkcodes logo"
            width={50}
            height={40}
          />
          <span className="flex font-bold text-lg ml-2">
            <h2 className="text-cyan-500">Shark</h2>
            <h2>Codes</h2>
          </span>
        </div>
        <nav className="flex flex-wrap justify-center gap-4  md:mb-0 w-full px-4 sm:justify-center md:gap-8 max-w-4xl">
          {NAVBAR_DATA.links.map((site, i) => (
            <Link
              key={i}
              href={site.href}
              className="text-gray-300 hover:text-cyan-500 text-md sm:text-base whitespace-nowrap font-bold"
            >
              {site.name}
            </Link>
          ))}
        </nav>
        {/* Ikona 18+ */}
        <div className="flex items-center">
          <Image
            src="/photos/18+.png"
            alt="18+ Icon"
            width={100}
            height={50}
            className="max-w-[80px]"
          />
        </div>
      </div>
      {/* Donji deo */}
      <div className="text-center mt-8">
        <p className="text-gray-400 text-sm sm:text-xs">
          © 2024 Sharkcodes.com
        </p>
      </div>
    </footer>
  );
}
