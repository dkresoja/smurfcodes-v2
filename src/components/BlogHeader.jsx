import Image from "next/image";
import React from "react";

const BlogHeader = () => {
  return (
    <section className="relative h-screen flex items-center justify-between bg-gradient-to-r from-gray-900 to-gray-800 w-full">
      <div className="text-center z-10 xl:ml-24">
        <span className="flex text-center justify-center mt-24">
          <h1 className="text-7xl font-bold mb-4">Bl</h1>
          <h1 className="text-7xl font-extrabold bg-gradient-to-tr from-white to-slate-300  bg-clip-text text-transparent">
            o
          </h1>
          <h1 className="text-7xl font-extrabold bg-gradient-to-tr from-white to-cyan-500  bg-clip-text text-transparent">
            g
          </h1>
        </span>

        <p className="text-xl mb-8 max-w-2xl mx-auto text-white font-normal">
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

export default BlogHeader;
