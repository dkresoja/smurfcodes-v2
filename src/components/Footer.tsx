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
    <footer className="bg-black py-8 flex flex-col items-center ">
      <div className="flex items-center justify-between w-4/5">
        <div className="flex items-center">
          <Image
            src="/photos/new-logo1.png"
            alt="Sharkcodes logo"
            width={70}
            height={50}
          />
          <span className="flex font-bold text-lg">
            {" "}
            <h2 className="text-cyan-500">Shark</h2>
            <h2>Codes</h2>
          </span>
        </div>
        <div className="flex gap-6 sm:gap-2 text-lg">
          {NAVBAR_DATA.links.map((site, i) => (
            <Link
              className="xl:text-2xl lg:text-l md:text-l sm:text-sm text-nowrap mx-2"
              key={i}
              href={site.href}
            >
              {site.name}
            </Link>
          ))}
        </div>
        <div className="flex items-center">
          <Image src="/photos/18+.png" width={140} height={70} alt="Gambling" />
        </div>
      </div>
      <div className="text-center">
        <p className="text-gray-400">2024C smurfcodes.com</p>
      </div>
    </footer>
  );
}
