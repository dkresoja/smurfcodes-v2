import Image from "next/image";
import React from "react";

const BlogHeader = () => {
  return (
    <section className="relative h-screen flex items-center justify-between bg-gradient-to-r from-gray-900 to-gray-800 w-full">
      <div className="text-center z-10 xl:ml-24">
        <span className="flex text-center justify-center mt-0 lg:mt-24 mb-2 sm:mb-0 mr-0 sm:mr-4">
          <h1 className="text-5xl font-bold mb-4 sm:text-5xl lg:text-6xl xl:text-7xl ">
            Blo
          </h1>

          <h1 className="text-5xl  sm:text-5xl lg:text-6xl font-extrabold bg-gradient-to-tr from-white to-cyan-500  bg-clip-text text-transparent xl:text-7xl">
            g
          </h1>
        </span>

        <p className="sm:text-xl text-base mb-8 max-w-2xl mx-4  text-slate-300 font-normal">
          Welcome to our blog – your ultimate destination for everything about
          Counter-Strike 2! Whether you’re a seasoned pro or a fresh recruit,
          our blog is packed with expert insights, strategy guides, in-depth
          analysis, and the latest updates from the world of CS2. Dive into our
          content to sharpen your skills, stay ahead of the meta, and discover
          the tips and tricks that will elevate your gameplay.
        </p>
        <Image
          width={750}
          height={350}
          src="/photos/strelice.png"
          alt="Arrows"
        ></Image>
      </div>

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

export default BlogHeader;
