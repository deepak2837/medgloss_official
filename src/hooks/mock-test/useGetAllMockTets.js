import { fetcher } from "@/services/fetcher";
import useSWR from "swr";

const useGetAllMockTest = () => {
  const { data, isLoading, error, mutate } = useSWR(
    `/api/v1/mock-test`,
    fetcher
  );

  return { data, isLoading, mutate, error };
};

export default useGetAllMockTest;
