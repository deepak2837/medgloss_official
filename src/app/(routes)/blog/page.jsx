"use client";
import BlogCard from "@/components/Blogs/Cards";
import Link from "next/link";
import LineLoader from "@/components/common/Loader";
import Aside from "@/components/AdSection/Aside";
import TopAdSection from "@/components/AdSection/TopAdSection";
import useGetBlogs from "@/hooks/blog/useGetBlogs";

export default function Page() {
  const { data: posts, isLoading } = useGetBlogs();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center lg:mt-[20%] md:mt-[30%] mt-[65%]">
        <LineLoader />
      </div>
    );
  }

  return (
    <>
      <Aside />
      <TopAdSection />
      <div className="max-w-5xl mx-auto p-8 mt-20 bg-white h-auto md:h-auto">
        <h1 className="text-5xl font-bold text-black mb-4 text-center font-sans">
          Medgloss Blog
        </h1>
        <p className="text-lg text-gray-700 mb-8 text-center">
          Explore the latest insights, updates, and expert advice on technology
          and medical solutions through the Medgloss blog.
        </p>

        <div className="flex justify-end mb-8">
          <Link href="/blog/create">
            <button className="px-6 py-2 bg-main text-white font-semibold rounded-md  transition duration-200">
              Write Your Own Blog
            </button>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link key={post._id} href={`/blog/${post._id}`} passHref>
              <BlogCard post={post} />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
