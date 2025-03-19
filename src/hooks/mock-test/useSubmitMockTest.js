import Api from "@/services/Api";
import { useRouter } from "next/router";
import { useState } from "react";

const useSubmitMockTest = () => {
  const [isLoading, setLoading] = useState();
  const router = useRouter();

  const onSubmitTest = async (id, data) => {
    try {
      setLoading(true);
      const response = await Api.post(`/api/v1/mock-test/${id}/submit`, data);
      if (response.ok) {
        router.push(`/mock-test/result/${id}`);
      } else {
        console.error("Failed to submit test:", response?.message);
      }
    } catch (e) {
      console.error(e);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  return { onSubmitTest, isLoading };
};

export default useSubmitMockTest;
