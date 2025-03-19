"use client";
import { createContext, useContext, useState } from "react";

const BlogContext = createContext();

export function BlogProvider({ children }) {
  const [blogData, setBlogData] = useState({
    title: "",
    excerpt: "",
    image: null,
    content: "",
  });

  return (
    <BlogContext.Provider value={{ blogData, setBlogData }}>
      {children}
    </BlogContext.Provider>
  );
}

export const useBlog = () => useContext(BlogContext);
