"use client";
import { useParams } from "next/navigation";
import Image from "next/image";
import useGetBlogDetails from "@/hooks/blog/useGetBlogDetails";

export default function BlogPost() {
  const params = useParams();
  const { postId } = params;

  const { data: post, isLoading } = useGetBlogDetails(postId);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!post) {
    return <p>Post not found</p>;
  }

  return (
    <article className="max-w-3xl mx-auto p-4 mt-28">
      <h1 className="text-4xl font-bold text-center mb-8">{post.title}</h1>
      <div className="flex items-center justify-center">
        {post.imageUrl && (
          <Image
            src={post.imageUrl}
            width={400}
            height={400}
            alt="Blog image"
          />
        )}
      </div>
      <div className="text-gray-600 mb-4">
        <span>
          {post.date} by {post.author}
        </span>
      </div>
      <div
        dangerouslySetInnerHTML={{
          __html: post.content,
        }}
        className="post-content"
        style={{
          whiteSpace: "pre-line", // Ensures line breaks are maintained
          fontFamily: "Arial, sans-serif",
          fontSize: "16px",
          lineHeight: "1.5",
        }}
      />
    </article>
  );
}
