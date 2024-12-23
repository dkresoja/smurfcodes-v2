import React from "react";
import Image from "next/image";

const Blog = () => {
  return (
    <section className="w-full h-1/2 relative flex justify-around bg-gray-900">
      <div className="w-[55vh] h-[65vh]   flex items-center ">
        {" "}
        <Image
          src="/photos/sekcija2.png"
          alt="CS:GO Background"
          className="relative "
          width={500} // Adjust based on actual image width
          height={700} // Adjust based on actual image height
          layout="responsive"
        />
      </div>
      <div className="">
        <h1>tekst</h1>
        <p className="w-40">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
          maiores nam magni debitis deleniti commodi, tempora corporis deserunt?
          Reprehenderit, enim.
        </p>
      </div>
    </section>
  );
};

export default Blog;
