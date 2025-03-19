"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function BlogInfoForm() {
  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [image, setImage] = useState(null);
  const router = useRouter();

  const handleNext = () => {
    const blogData = { title, excerpt, image };
    router.push({
      pathname: "/blog/content",
      query: { blogData: JSON.stringify(blogData) }, // Pass data to the next page
    });
  };

  return (
    <div className="max-w-3xl mx-auto p-8 mt-20 bg-white shadow-md rounded-md">
      <h2 className="text-3xl font-bold mb-6">Create Blog - Step 1</h2>

      <label className="block mb-4">
        Title
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="w-full p-2 border border-gray-300 rounded"
        />
      </label>

      <label className="block mb-4">
        Excerpt
        <textarea
          value={excerpt}
          onChange={(e) => setExcerpt(e.target.value)}
          required
          className="w-full p-2 border border-gray-300 rounded"
        />
      </label>

      <label className="block mb-4">
        Image
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
          className="w-full"
        />
      </label>

      <button
        type="button"
        onClick={handleNext}
        className="w-full bg-blue-500 text-white py-2 rounded-md"
      >
        Next
      </button>
    </div>
  );
}
