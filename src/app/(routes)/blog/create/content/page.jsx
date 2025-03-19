// "use client";
// import { useRouter } from "next/navigation";
// import { useBlog } from "@/context/BlogContext";
// import { useState } from "react";
// import dynamic from "next/dynamic";

// const CKEditor = dynamic(
//   () => import("@ckeditor/ckeditor5-react").then((mod) => mod.CKEditor),
//   { ssr: false, loading: () => <p className="text-black">Loading editor...</p> }
// );
// import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

// export default function BlogContentForm() {
//   const router = useRouter();
//   const { blogData, setBlogData } = useBlog();
//   const [content, setContent] = useState(blogData.content || "");

//   const handleContentChange = (event, editor) => {
//     const data = editor.getData();
//     setContent(data);
//     setBlogData((prev) => ({ ...prev, content: data }));
//   };

//   const handleMediaUpload = async (file, type) => {
//     const formData = new FormData();
//     formData.append("file", file);

//     try {
//       const response = await fetch(
//         `http://localhost:5000/api/v1/upload/${type}`,
//         { method: "POST", body: formData }
//       );
//       const data = await response.json();

//       if (response.ok) {
//         return data.mediaUrl;
//       } else {
//         console.error("Upload failed:", data.message);
//         return null;
//       }
//     } catch (error) {
//       console.error("Error uploading media:", error);
//       return null;
//     }
//   };

//   const handleSubmit = async () => {
//     try {
//       const response = await fetch("http://localhost:5000/api/v1/blog/create", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           title: blogData.title,
//           author: blogData.author,
//           excerpt: blogData.excerpt,
//           content,
//           imageUrl: blogData.image || [],
//           videoUrl: blogData.video || [],
//         }),
//       });

//       if (response.ok) {
//         router.push("/blog");
//       } else {
//         console.error("Failed to create blog post");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };

//   return (
//     <div className="max-w-5xl mx-auto p-8 mt-20 bg-white shadow-md rounded-md h-auto">
//       <h2 className="text-3xl font-bold mb-4">Create Blog Post</h2>
//       <CKEditor
//         editor={ClassicEditor}
//         data={content}
//         onChange={handleContentChange}
//         config={{
//           toolbar: [
//             "heading", "bold", "italic", "link", "bulletedList",
//             "numberedList", "blockQuote", "imageUpload", "mediaEmbed", "undo", "redo"
//           ],
//           simpleUpload: {
//             uploadUrl: `http://localhost:5000/api/v1/upload/image`,
//             headers: {
//               Authorization: "Bearer <your-token>", // Optional: Add authentication headers if needed
//             },
//           },
//         }}
//       />
//       <button
//         onClick={handleSubmit}
//         className="w-full bg-main text-white py-2 rounded-md mt-4"
//       >
//         Submit
//       </button>
//     </div>
//   );
// }

import React from "react";

const Page = () => {
  return <div>Page</div>;
};

export default Page;
