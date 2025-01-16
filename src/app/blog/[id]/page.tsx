import BlogDynamic from "@/components/BlogDynamic";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { blogTexts } from "@/constants/index";

export async function generateStaticParams() {
  return blogTexts.map((blog) => ({
    id: blog.id,
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
    return <div>Error: Blog not found</div>;
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
