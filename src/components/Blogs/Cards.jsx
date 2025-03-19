import Image from "next/image";
import Link from "next/link";
import NoImage from "../../assets/noimg.png";

export default function BlogCard({ post }) {
  return (
    <div className="bg-main rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative">
        <Image
          src={post.coverImage || NoImage}
          height={400}
          width={400}
          alt={post.title}
          className="w-full h-48 object-cover"
        />
        {/* <span className="absolute top-4 right-4 bg-gray-200 text-gray-800 px-2 py-1 rounded-lg text-sm font-semibold">
          {post.title.toUpperCase()}
        </span> */}
      </div>
      <div className="p-6">
        <h2 className="text-xl font-bold text-black mb-2">{post.title}</h2>
        <p className="text-gray-700 text-sm mb-4">{post.excerpt}</p>
        <Link href={`/blog/${post._id}`}>
          <p className="text-white font-semibold hover:underline">
            Read More &raquo;
          </p>
        </Link>
      </div>
      <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between text-gray-100 text-sm">
        <span>{post.author}</span>
        <span>{post.date}</span>
      </div>
    </div>
  );
}
