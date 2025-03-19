import Api from "@/services/Api";
import { useState } from "react";

export default async function useBlog() {
  const [isLoading, setLoading] = useState(false);

  const createBlog = async (data) => {
    try {
      setLoading(true);
      const response = await Api.post(`/api/v1/blog/create`, data);
      return response;
    } catch (err) {
      setLoading(false);
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return {
    isLoading,
    createBlog,
  };
}
