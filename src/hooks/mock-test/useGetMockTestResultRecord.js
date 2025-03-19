import { fetcher } from "@/services/fetcher";
import useSWR from "swr";

const useGetMockTestResultRecord = () => {
  const { data, isLoading, error, mutate } = useSWR(
    `/api/v1/mock-test/records`,
    fetcher
  );

  return { data, isLoading, mutate, error };
};

export default useGetMockTestResultRecord;
