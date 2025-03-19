"use client";
import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";
import ResultDisplay from "@/components/Mocktest/ResultDisplay";
import LineLoader from "@/components/common/Loader";
import useAuthStore from "@/store/authStore";
import useGetMockTestResult from "@/hooks/mock-test/useGetMockTestResult";

export default function ResultPage() {
  const router = useRouter();
  const params = useParams();
  const { id } = params;
  const { getToken } = useAuthStore();
  const token = getToken();
  const { data: result, isLoading, isError } = useGetMockTestResult(id);

  useEffect(() => {
    if (!token) {
      router.push("/login");
    }
  }, [token, router]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center lg:mt-[20%] md:mt-[30%] mt-[65%]">
        <LineLoader />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex items-center justify-center lg:mt-[20%] md:mt-[30%] mt-[65%]">
        <div>Error loading results. Please try again.</div>
      </div>
    );
  }

  if (!result) {
    return (
      <div className="flex items-center justify-center lg:mt-[20%] md:mt-[30%] mt-[65%]">
        <div>No results found.</div>
      </div>
    );
  }

  return <ResultDisplay result={result} />;
}
