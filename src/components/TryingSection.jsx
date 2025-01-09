import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function TryingSection() {
  return (
    <section className=" bg-gradient-to-b  to-black  text-white py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 lg:px-16 relative overflow-hidden w-full">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-around xl:w-4/5 ">
        <div className="md:w-1/2 xl:ml-20 mb-8 mt-8 md:mb-0 pr-0 md:pr-8  xl:shadow-cyan-800 xl:shadow-xl xl:px-4 xl:py-4 ">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Every Week You Can <span className="text-cyan-400">Win</span>
            <br />
            <span className="text-cyan-400">Exclusive</span> Skins
          </h2>
          <span className="text-gray-400 mb-6 font-semibold">
            <p className="mb-2">
              Get ready to level up your inventory with our exclusive{" "}
              <strong>CS:GO skins giveaway</strong>! Whether you’re looking to
              score premium skins or expand your collection, this is your chance
              to grab amazing CS:GO skins for free.
            </p>
            <p className="mb-2">
              Our trusted platform makes it easy to join and gives you the
              opportunity to win
              <strong> CS:GO giveaway skins</strong> without any hidden fees.
            </p>
            <p className="mb-6">
              Don’t miss out—click below to enter and claim your shot at owning
              the best <strong>CS:GO free skins</strong> today!
            </p>
          </span>

          <Link href="/giveaway" passHref>
            <Button className="bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded">
              Giveaways
            </Button>
          </Link>
        </div>
        <div className="md:w-1/2 flex justify-center  md:justify-end  ">
          <div className="relative  sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 ">
            <Image
              width={550}
              height={550}
              src="/photos/GW.png"
              className="border-b-4 rounded-lg border-cyan-600  "
              alt="Person holding gift boxes"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
