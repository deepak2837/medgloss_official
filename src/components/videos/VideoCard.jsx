import Image from "next/image";
import Link from "next/link";

export default function VideoCard({ post }) {
  return (
    <div className="bg-main rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative">
        <Image
          height={400}
          width={400}
          src={post.image}
          alt={post.title}
          className="w-full h-48 object-cover"
        />
      </div>
      <div className="p-6">
        <h2 className="text-xl font-bold text-black mb-2">{post.title}</h2>
      </div>
    </div>
  );
}
