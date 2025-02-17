import BlogDynamic from "@/components/BlogDynamic";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { blogTexts, blogPosts } from "@/constants/index";

import { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const id = resolvedParams.id;

  const blogPost = await blogTexts.find((blog) => blog.id === id);
  const blogOpenGraph = await blogPosts.find((blogPost) => blogPost.id === id);
  const imageUrl: string | undefined = blogOpenGraph?.img;

  // Dodajte podrazumevanu vrednost
  const safeImageUrl: string | URL = imageUrl || "/opengraph-image.jpg";

  return {
    title: blogPost?.title,
    openGraph: {
      images: [
        {
          url: safeImageUrl,
        },
      ],
    },
  };
}

export async function generateStaticParams() {
  return blogTexts.map((blog) => ({
    id: blog.id,
    title: blog.title,
  }));
}

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  // Wait for params to be resolved
  const resolvedParams = await params;
  const id = resolvedParams.id;

  // Ensure id is available
  if (!id) {
    return <div>Error: Missing ID</div>;
  }

  // Find the corresponding blog based on id
  const blog = blogTexts.find((blog) => blog.id === id);

  // If blog is not found, display an error
  if (!blog) {
    return notFound();
  }

  // If blog is found, assign values
  const {
    title,
    title1,
    title2,
    title3,
    title4,
    title5,
    title6,
    title7,
    description1,
    description2,
    description3,
    description4,
    description5,
    description6,
    description7,
    description8,
    img1,
  } = blog;

  return (
    <>
      <Navbar />{" "}
      <BlogDynamic
        title={title}
        title1={title1}
        title2={title2}
        title3={title3}
        title4={title4}
        title5={title5}
        title6={title6}
        title7={title7}
        desc1={description1}
        desc2={description2}
        desc3={description3}
        desc4={description4}
        desc5={description5}
        desc6={description6}
        desc7={description7}
        desc8={description8}
        img={img1}
      />
      <Footer />
    </>
  );
};

export default Page;
