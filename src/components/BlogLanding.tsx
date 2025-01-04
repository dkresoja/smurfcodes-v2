import React from "react";
import { Card, CardContent, CardFooter } from "./ui/card";
import Link from "next/link";
import { blogPosts } from "../constants/index";
import Image from "next/image";

const BlogLanding = () => {
  return (
    <>
      <section className="flex flex-col w-full">
        <div className="w-full flex justify-center bg-black pt-20">
          {" "}
          <h2 className="w-5/6 text-4xl text-left font-bold text-white ">
            Our Blog Posts
          </h2>
        </div>

        <div className="w-full py-12 md:pb-24 md:pt-6 lg:pb-24 lg:pt-12 flex  justify-center bg-black">
          <div className="container grid gap-8 md:grid-cols-2 lg:grid-cols-3 ">
            {blogPosts.map((post, i) => (
              <Card
                key={i}
                className="group h-full w-full overflow-hidden rounded-lg border-4  transition-all hover:shadow-lg bg-transparent border-cyan-900 hover:border-cyan-500"
              >
                <Link href={post.url} prefetch={false}>
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={post.img}
                      width={600}
                      height={450}
                      alt="Building a Design System"
                      className="h-full w-full object-cover transition-all group-hover:scale-105"
                      style={{ aspectRatio: "600/450", objectFit: "cover" }}
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="text-lg font-semibold transition-colors  text-white">
                      {post.title}
                    </h3>
                    <p className="line-clamp-2 text-muted-foreground">
                      {post.description}
                    </p>
                  </CardContent>
                  <CardFooter className="flex items-center justify-between p-4 pt-0 text-sm text-muted-foreground">
                    <div>{post.author}</div>
                    <div>{post.date}</div>
                  </CardFooter>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogLanding;
