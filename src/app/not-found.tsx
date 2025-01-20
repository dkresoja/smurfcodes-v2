import Navbar from "@/components/Navbar";

export default function NotFound() {
  return (
    <div className="w-full bg-black h-screen">
      <Navbar />
      <div className="w-full h-screen flex items-center justify-center">
        <div className="w-3/4  text-white text-center">
          <h2 className="text-3xl xl:text-5xl">
            Ooops, it looks like this page doesen&apos;t exist
          </h2>
        </div>
      </div>
    </div>
  );
}
