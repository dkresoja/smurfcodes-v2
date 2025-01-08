"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import MobileMenu from "./MobileMenu";
import { Button } from "./ui/button";

const NAVBAR_DATA = {
  links: [
    { name: "Home", href: "/" },
    { name: "Promo codes", href: "/promo-codes" },
    { name: "Giveaways", href: "/giveaway" },
    { name: "Blog", href: "/blog" },
  ],
};

function Navbar({ handleClickHamburger, click }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <div
      className={`w-full h-26 top-0 py-2 text-white z-20 flex justify-around max-lg:justify-between fixed transition-all duration-500 ${
        scrolled
          ? " bg-black/65 backdrop-blur-[0.60vh]  border-cyan-800  "
          : "bg-transparent border-b-0"
      }`}
    >
      <div className="w-auto flex justify-start items-center">
        <Image
          src="/photos/new-logo1.png"
          className="w-18 h-14"
          alt="SharkCodes Logo"
          width={110}
          height={250}
        />
        <span className="flex font-bold text-2xl">
          <p className="text-cyan-500">Shark</p>
          <p>Codes</p>
        </span>
      </div>
      <div className="flex z-10 w-auto justify-center max-lg:hidden">
        <ul className="flex gap-12 items-center">
          {NAVBAR_DATA.links.map((link, i) => (
            <li key={i}>
              <a
                href={link.href}
                className="text-white font-bold text-xl justify-center hover:text-cyan-400"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center max-lg:hidden">
        <Button className="bg-black text-cyan-500 border-2 font-bold border-cyan-600">
          White mode
        </Button>
      </div>
      <div className="hidden max-lg:flex white items-center px-4">
        <button
          onClick={handleClickHamburger}
          className="focus:outline-none"
          aria-label="Toggle mobile menu"
        >
          <img src="icons/hamburger.png" alt="Menu" width={25} height={25} />
        </button>
      </div>
      <MobileMenu isOpen={click} onClose={handleClickHamburger} />
    </div>
  );
}

export default Navbar;
