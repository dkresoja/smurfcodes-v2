"use client";

import Image from "next/image";
import React from "react";

import Link from "next/link";

const BlogDynamic = ({
  title,
  title1,
  title2,
  title3,
  title4,
  title5,
  title6,
  title7,
  desc1,
  desc2,
  desc3,
  desc4,
  desc5,
  desc6,
  desc7,
  desc8,
  img,
}: {
  title: string;
  title1: string;
  title2: string;
  title3: string;
  title4: string;
  title5: string;
  title6: string;
  title7: string;
  desc1: string;
  desc2: string;
  desc3: string;
  desc4: string;
  desc5: string;
  desc6: string;
  desc7: string;
  desc8: string;

  img: string;
}) => {
  return (
    <>
      <div className="w-full min-h-screen bg-black">
        <div className="flex flex-col lg:flex-row w-full lg:w-4/5 mx-auto px-4 lg:px-0 pt-20 gap-8">
          {/* Main content */}
          <div className="w-full lg:w-2/3 text-white">
            <div className="relative w-full aspect-[1300/800]">
              <h1 className="mt-6 lg:mt-4 text-3xl lg:text-5xl xl:text-7xl font-bold">
                {title}
              </h1>

              <Image
                src={img}
                fill
                className="object-cover mt-24 pb-20"
                alt="CSGO Skins"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw"
              />
            </div>

            <div className="mt-12  space-y-4">
              <p className="text-gray-500 text-xl font-bold pb-4">{desc1}</p>

              <h2 className="text-2xl font-semibold">{title1}</h2>
              <p className="text-gray-500 text-xl font-bold pb-4">{desc2}</p>
              <h2 className="text-2xl font-semibold">{title2}</h2>
              <p className="text-gray-500 text-xl font-bold pb-4">{desc3}</p>
              <h2 className="text-2xl font-semibold">{title3}</h2>
              <p className="text-gray-500 text-xl font-bold pb-4">{desc4}</p>
              <h2 className="text-2xl font-semibold">{title4}</h2>
              <p className="text-gray-500 text-xl font-bold pb-4">{desc5}</p>
              <h2 className="text-2xl font-semibold">{title5}</h2>
              <p className="text-gray-500 text-xl font-bold pb-4">{desc6}</p>
              <h2 className="text-2xl font-semibold">{title6}</h2>
              <p className="text-gray-500 text-xl font-bold pb-4">{desc7}</p>
              <h2 className="text-2xl font-semibold">{title7}</h2>
              <p className="text-gray-500 text-xl font-bold pb-4">{desc8}</p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-1/3  lg:mt-8 lg:fixed xl:right-20 lg:right-12  ">
            <div className=" lg:top-24  p-4 xl:px-20 lg:px-12 lg:h-1/2 text-white  ">
              <div className="p-4 hover:cyan-800">
                <Link href="/promo-codes">
                  <Image
                    src="/blogPhotos/freecsskinsBlogSticky.jpg"
                    width={1200}
                    height={700}
                    alt="Free skins"
                    className="hover:scale-105 transition-all  "
                  />
                </Link>{" "}
              </div>

              <div className=" mt-20  px-4 py-4">
                <Link href="/giveaway">
                  {" "}
                  <Image
                    src="/blogPhotos/GiveAway.png"
                    width={1200}
                    height={800}
                    alt="Giveaway"
                    className="hover:scale-105 transition-all  "
                  ></Image>
                </Link>
              </div>
            </div>
            <div className=" lg:top-24  p-4 xl:px-20 lg:px-12 text-white  ">
              <h2></h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDynamic;
