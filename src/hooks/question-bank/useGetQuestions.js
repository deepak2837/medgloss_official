import { fetcher } from "@/services/fetcher";
import useSWR from "swr";

const useGetQuestions = () => {
  const { data, isLoading, error, mutate } = useSWR(
    "/api/v1/question-bank",
    fetcher
  );

  return { data, isLoading, mutate, error };
};

export default useGetQuestions;
