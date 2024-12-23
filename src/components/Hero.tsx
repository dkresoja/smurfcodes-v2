"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Hero() {
  const router = useRouter();

  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 to-gray-800 w-full">
      <div className="text-center z-10">
        <h1 className="text-5xl font-bold mb-4">FREE CS SKINS</h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          You can play for free at csgo bet sites that require no deposit
          bonuses. Furthermore, you can explore the same selection with more
          generous deals than other players, open csgo free cases and enjoy the
          thrill of winning csgo free skins without risking your cash.
        </p>
        <Button
          onClick={() => {
            router.push("/promo-codes");
          }}
          className="bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded"
        >
          Get Started
        </Button>
        <div className="flex justify-center lg:gap-14 sm: gap-8 mt-32 text-xl ">
          {" "}
          <span className="flex flex-col justify-center">
            <p className="text-5xl font-bold font-palanquin max-sm:text-4xl ">
              10+
            </p>
            <p className="font-semibold text-slate-300 max-sm:text-l">Codes</p>
          </span>
          <span className="flex flex-col justify-center">
            <p className="text-5xl font-bold font-palanquin max-sm:text-4xl ">
              50+
            </p>
            <p className="font-semibold text-slate-300 max-sm:text-l whitespace-nowrap">
              Cases
            </p>
          </span>
          <span className="flex flex-col justify-center">
            <p className="text-5xl font-bold font-palanquin  max-sm:text-4xl">
              1k+
            </p>
            <p className="font-semibold text-slate-300 max-sm:text-l whitespace-nowrap">
              Users
            </p>
          </span>
        </div>
      </div>
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <img
        src="/photos/newbackground.png"
        alt="CS:GO Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
    </section>
  );
}
