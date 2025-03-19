import { fetcher } from "@/services/fetcher";
import useSWR from "swr";

const useGetBlogDetails = (id) => {
  const { data, isLoading, error, mutate } = useSWR(
    `/api/v1/blog/${id}`,
    fetcher
  );

  return { data, isLoading, mutate, error };
};

export default useGetBlogDetails;
