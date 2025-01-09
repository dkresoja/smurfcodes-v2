"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { MobileMenu } from "./MobileMenu";
import { Menu } from "lucide-react";

const NAVBAR_DATA = {
  links: [
    { name: "Home", href: "/" },
    { name: "Promo codes", href: "/promo-codes" },
    { name: "Giveaways", href: "/giveaway" },
    { name: "Blog", href: "/blog" },
  ],
};

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    document.body.style.overflow = isMobileMenuOpen ? "auto" : "hidden";
  };

  return (
    <>
      <div
        className={`fixed w-full h-26 top-0 py-2 text-white z-20 flex justify-around max-lg:justify-between transition-all duration-500 ${
          scrolled ? "bg-black/65 backdrop-blur-[0.60vh]" : "bg-transparent"
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
          <Button
            onClick={toggleMobileMenu}
            variant="ghost"
            size="icon"
            className="text-white hover:text-cyan-400 focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
      <MobileMenu isOpen={isMobileMenuOpen} onClose={toggleMobileMenu} />
    </>
  );
}

export default Navbar;
