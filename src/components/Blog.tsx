import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function BlogPromo() {
  return (
    <section className=" bg-gradient-to-b  from-black   text-white py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 lg:px-16 relative overflow-hidden w-full">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-around xl:w-4/5">
        <div className="md:w-1/2 xl:ml-20 mb-8 md:mb-0 pr-0 md:pr-8  xl:shadow-sky-800 xl:shadow-xl xl:px-4 xl:py-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Read Our <span className="text-cyan-400">Blog</span>
            <br />
            <span className="text-cyan-400">Exclusive</span> Content
          </h2>
          <div className="text-gray-400 mb-6 font-semibold">
            <p className="mb-2">
              Dive into the world of <strong>CS:GO</strong> with our exclusive
              blog, packed with insights about CS:GO cases, the latest updates
              on CSGO all gloves, tips to make the most of gambling CS:GO
              strategies and many more.
            </p>
            <p className="mb-6">
              Whether you’re a skin collector or a dedicated player, our blog
              covers everything you need to know about{" "}
              <strong>CSGO skin</strong> trends and strategies. Don’t miss
              out—explore now and take your CS:GO experience to the next level!
            </p>
          </div>

          <Link href="/blog" passHref>
            <Button className="bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded">
              Our Blog
            </Button>
          </Link>
        </div>
        <div className="md:w-1/2 xl:w-1/2 flex justify-center  md:justify-end  ">
          <div className="relative sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 ">
            <Image
              src="/photos/blog.png"
              className="rounded-lg border-cyan-600  "
              alt="CS2 Blog"
              width={550}
              height={550}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
