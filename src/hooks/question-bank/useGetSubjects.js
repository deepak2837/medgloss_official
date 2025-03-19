import { fetcher } from "@/services/fetcher";
import useSWR from "swr";

const useGetSubjects = () => {
  const { data, isLoading, error, mutate } = useSWR("/api/v1/blog", fetcher);

  return { data, isLoading, mutate, error };
};

export default useGetBlogs;
