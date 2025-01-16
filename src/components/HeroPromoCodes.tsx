"use client";
import Image from "next/image";
import React from "react";

const HeroPromoCodes = () => {
  return (
    <section className="relative h-screen flex items-center justify-between bg-gradient-to-r from-gray-900 to-gray-800 w-full">
      <div className="text-center z-10 xl:ml-24 ">
        <span className="flex text-center justify-center mt-0 lg:mt-24 mb-2 sm:mb-0 mr-0 sm:mr-4">
          <h1 className="text-5xl font-bold mb-4 sm:text-5xl lg:text-6xl xl:text-7xl ">
            Promo code
          </h1>
          <h1 className="text-5xl  sm:text-5xl lg:text-6xl font-extrabold bg-gradient-to-tr from-white to-cyan-500  bg-clip-text text-transparent xl:text-7xl">
            s
          </h1>
        </span>

        <p className=" sm:text-xl text-base mb-8 max-w-2xl mx-4  text-slate-300 font-normal">
          Welcome to our Promo Codes page – your ultimate source for the best
          Counter-Strike 2 rewards! Here, you’ll find exclusive CS2 promo codes
          for free daily cases, bonus coins, and premium skins. Whether you’re
          upgrading your inventory or boosting gameplay, our codes give you the
          edge without deposits or conditions. Updated regularly, this page
          keeps you ahead with the latest codes. Don’t miss out – claim your
          rewards below and dominate the battlefield!
        </p>
        <Image
          src="/photos/strelice.png"
          alt="Decoration"
          width={750}
          height={350}
        />
      </div>
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <Image
        src="/photos/blogheader.png"
        alt="CS:GO Background"
        className="absolute inset-0 w-full h-full object-cover"
        layout="fill"
      />
    </section>
  );
};

export default HeroPromoCodes;
