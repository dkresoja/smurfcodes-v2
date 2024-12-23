"use client";

import React from "react";
import { Button } from "./ui/button";
import NAVBAR_DATA from "../constants";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed inset-y-0 right-0 w-1/2 bg-gradient-to-r from-black to-slate-800 shadow-lg transform transition-transform duration-300 ease-in-out z-30  ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex flex-col h-auto">
        <div className="flex justify-end p-4">
          <button
            onClick={onClose}
            className="text-white hover:text-cyan-400 focus:outline-none"
            aria-label="Close mobile menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
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
        <div className="p-4">
          <Button className="w-full bg-black text-cyan-500 border-2 font-bold border-cyan-600">
            White mode
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
