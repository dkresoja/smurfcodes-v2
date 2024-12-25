import { Button } from "@/components/ui/button";
import Image from "next/image";

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
          <p className="text-gray-400 mb-6">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus
            officiis autem voluptatem eius, labore soluta minima optio aliquid
            maxime cumque debitis quae. Dolorem doloremque sequi nam blanditiis?
            Dolores quisquam earum a doloremque ipsum vel dolorem fugit
            obcaecati possimus repellat! Molestiae enim voluptates culpa tenetur
            fuga quas illum ipsum eligendi labore.
          </p>
          <Button
            variant="secondary"
            className="bg-cyan-500 hover:bg-gray-800 text-white font-bold py-2 px-6 rounded"
          >
            Giveaways
          </Button>
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
