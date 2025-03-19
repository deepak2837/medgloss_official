import { fetcher } from "@/services/fetcher";
import useSWR from "swr";

const useGetMockTestQuestions = (id) => {
  const { data, isLoading, error, mutate } = useSWR(
    `/api/v1/mock-test/${id}/start`,
    fetcher
  );

  return { data, isLoading, mutate, error };
};

export default useGetMockTestQuestions;
