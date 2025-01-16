import Image from "next/image";
import React from "react";

const GiveawayHero = () => {
  return (
    <section className="relative h-screen flex items-center justify-between bg-gradient-to-r from-gray-900 to-gray-800 w-full">
      <div className="text-center z-10 xl:ml-24">
        <span className="flex text-center justify-center mt-0 lg:mt-24 mb-2 sm:mb-0 mr-0 sm:mr-4">
          <h1 className="text-5xl font-bold mb-4 sm:text-5xl lg:text-6xl xl:text-7xl">
            Giveaway
          </h1>

          <h1 className="text-5xl  sm:text-5xl lg:text-6xl font-extrabold bg-gradient-to-tr from-white to-cyan-500  bg-clip-text text-transparent xl:text-7xl">
            s
          </h1>
        </span>

        <p className="sm:text-xl text-base mb-8 max-w-2xl mx-4  text-slate-300 font-normal">
          Are you ready to claim amazing CS:GO skins, cases, and other rewards
          for free? You&apos;ve come to the right place! Our giveaway page is
          your go-to destination for the most exciting and rewarding{" "}
          <strong>CS:GO giveaways</strong> available online. Whether you’re a
          seasoned collector or a new player looking to enhance your inventory,
          our platform offers opportunities to win exclusive in-game items with
          ease.
        </p>
        <Image
          width={750}
          height={350}
          src="/photos/strelice.png"
          alt="Arrows"
        ></Image>
      </div>
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <Image
        src="/photos/blogheader.png"
        alt="CS:GO Background"
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover"
      />
    </section>
  );
};

export default GiveawayHero;
