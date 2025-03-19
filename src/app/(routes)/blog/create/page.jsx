"use client";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import useBlog from "@/hooks/blog/useBlog";
import LineLoader from "@/components/common/Loader";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

function extractAndRemoveBase64Image(payload) {
  // Regex to match <img> tag with base64 image
  const base64Regex =
    /<img\s+src=["'](data:image\/[a-zA-Z]+;base64,[^"']+)["']\s*\/?>/i;

  // Extracting the base64 image
  const match = payload.match(base64Regex);
  const extractedImage = match ? match[1] : null; // Extract only the base64 part

  // Remove the <img> tag from the payload
  const modifiedPayload = payload.replace(base64Regex, "");

  return { extractedImage, modifiedPayload };
}

export default function BlogInfoForm() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [coverImage, setCoverImage] = useState(null);
  const quillRef = useRef(null);
  const { isLoading, createBlog } = useBlog();

  const handleImageChange = (e) => {
    setCoverImage(e.target.files[0]);
  };

  const addTooltips = () => {
    const tooltips = {
      // Text Formatting
      "ql-bold": "Bold (Ctrl+B)",
      "ql-italic": "Italic (Ctrl+I)",
      "ql-underline": "Underline (Ctrl+U)",
      "ql-strike": "Strikethrough",

      // Headers
      "ql-header[value='1']": "Heading 1",
      "ql-header[value='2']": "Heading 2",

      // Lists
      "ql-list[value='ordered']": "Numbered List",
      "ql-list[value='bullet']": "Bullet List",

      // Alignment
      "ql-align[value='']": "Align Left",
      "ql-align[value='center']": "Align Center",
      "ql-align[value='right']": "Align Right",
      "ql-align[value='justify']": "Justify Text",

      // Scripts
      "ql-script[value='sub']": "Subscript",
      "ql-script[value='super']": "Superscript",

      // Colors
      "ql-color": "Text Color",
      "ql-background": "Background Color",

      // Block Formatting
      "ql-blockquote": "Blockquote",
      "ql-code-block": "Code Block",

      // Links & Media
      "ql-link": "Insert Link",
      "ql-image": "Insert Image",
      "ql-video": "Insert Video",

      // Custom Options
      "ql-formula": "Formula",

      // Clean Formatting
      "ql-clean": "Remove Formatting",
    };

    setTimeout(() => {
      Object.keys(tooltips).forEach((selector) => {
        const button = document.querySelector(`.ql-toolbar .${selector}`);
        if (button) {
          button.setAttribute("title", tooltips[selector]);
        }
      });
    }, 500); // Delay to ensure toolbar is fully loaded
  };

  useEffect(() => {
    addTooltips();
  }, []);

  const sepratedData = extractAndRemoveBase64Image(content);

  const handleSubmit = async () => {
    const blogData = {
      title: title,
      author: author,
      excerpt: excerpt,
      content: sepratedData?.modifiedPayload,
      imageUrl: coverImage || "",
      videoUrl: [],
    };

    try {
      const response = await createBlog(blogData);

      if (response.ok) {
        router.push("/blog");
      } else {
        console.error("Failed to create blog post");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  if (isLoading) {
    return (
      <div className=" flex items-center justify-center h-screen">
        <LineLoader />
      </div>
    );
  }

  const modules = {
    toolbar: {
      container: [
        ["bold", "italic", "underline", "strike"],
        ["blockquote", "code-block"],
        ["link", "image", "video", "formula"],
        [{ header: 1 }, { header: 2 }],
        [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
        [{ script: "sub" }, { script: "super" }],
        [{ indent: "-1" }, { indent: "+1" }],
        [{ direction: "rtl" }],
        [{ size: ["small", false, "large", "huge"] }],
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        [{ color: [] }, { background: [] }],
        [{ font: [] }],
        [{ align: [] }],
        ["clean"],
      ],
    },
  };

  return (
    <div className="max-w-3xl mx-auto p-8 mt-20 bg-white shadow-md rounded-md">
      <h2 className="text-3xl font-bold mb-4">Create Blog Post</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-2 mb-4 border rounded"
      />
      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        className="w-full p-2 mb-4 border rounded"
      />
      <textarea
        placeholder="Excerpt"
        value={excerpt}
        onChange={(e) => setExcerpt(e.target.value)}
        className="w-full p-2 mb-4 border rounded"
      ></textarea>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <label htmlFor="coverImage"> Cover Image</label>
        <input type="file" onChange={handleImageChange} className="mb-4" />
      </div>
      <div className="mb-4 quill-editor-custom">
        <ReactQuill
          ref={quillRef}
          value={content}
          onChange={setContent}
          modules={modules}
          theme="snow"
          placeholder="Write your blog content here..."
        />
      </div>

      <button
        onClick={handleSubmit}
        className="w-full bg-main text-white py-2 rounded-md"
      >
        Submit
      </button>
      <style jsx global>{`
        .quill-editor-custom {
          display: grid;
          grid-template-rows: auto auto; /* Two rows */
        }

        .quill-editor-custom .ql-toolbar {
          order: 2; /* Toolbar moves to the second row */
          border-radius: 0 0 4px 4px;
        }

        .quill-editor-custom .ql-container {
          order: 1; /* Editor moves to the first row */
          border-radius: 4px 4px 0 0;
          border: 1px solid #ccc;
        }

        .quill-editor-custom .ql-editor {
          min-height: 200px;
        }

        .quill-editor-custom .ql-container {
          height: 300px; /* Set a fixed height */
          border: 1px solid #ccc;
          border-radius: 4px;
          display: flex;
          flex-direction: column;
        }

        .quill-editor-custom .ql-editor {
          height: 100%; /* Fill available space */
          max-height: 300px; /* Limit height */
          overflow-y: auto; /* Enable vertical scrolling */
          padding: 10px;
          background-color: white;
          color: black;
        }

        /* Target only the video inside the editor */
        .quill-editor-custom .ql-editor .ql-video {
          width: 100% !important; /* Make video full width */
          height: 150% !important; /* Maintain aspect ratio */
          max-width: 100%; /* Ensure it doesn't overflow */
          max-height: 500px; /* Set a reasonable max height */
          display: block; /* Prevents inline layout issues */
          object-fit: cover; /* Ensures video scales correctly */
        }
      `}</style>
    </div>
  );
}
