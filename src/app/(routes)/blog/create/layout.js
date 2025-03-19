import { BlogProvider } from "@/context/BlogContext";


export default function BlogLayout({ children }) {
  return (
    <BlogProvider>
      {children}
    </BlogProvider>
  );
}
