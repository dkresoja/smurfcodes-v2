"use client";

import React from "react";
import { Button } from "./ui/button";
import { X } from "lucide-react";
import Link from "next/link";

const NAVBAR_DATA = {
  links: [
    { name: "Home", href: "/" },
    { name: "Promo codes", href: "/promo-codes" },
    { name: "Giveaways", href: "/giveaway" },
    { name: "Blog", href: "/blog" },
  ],
};

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={onClose}
      />
      <div
        className={`fixed inset-y-0 right-0 w-64 bg-gradient-to-r from-black to-slate-800 shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-end p-4">
            <Button
              onClick={onClose}
              variant="ghost"
              size="icon"
              className="text-white hover:text-cyan-400 focus:outline-none"
              aria-label="Close mobile menu"
            >
              <X className="h-6 w-6" />
            </Button>
          </div>
          <nav className="flex-grow">
            <ul className="flex flex-col space-y-4 p-4 items-center">
              {NAVBAR_DATA.links.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="text-white font-bold text-xl hover:text-cyan-400 block py-2"
                    onClick={onClose}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <Link href="/contact">
            <div className="p-4">
              <Button className="w-full bg-black text-cyan-500 border-2 font-bold border-cyan-600">
                Contact us
              </Button>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};
