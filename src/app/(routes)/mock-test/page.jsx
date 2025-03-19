"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import TestCard from "@/components/Mocktest/TestCard";
import LineLoader from "@/components/common/Loader";
import useAuthStore from "@/store/authStore";
import useGetAllMockTest from "@/hooks/mock-test/useGetAllMockTets";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export default function Page() {
  const router = useRouter();
  const { getToken } = useAuthStore();
  const token = getToken();

  useEffect(() => {
    if (!token) {
      // Redirect to login if token is not found
      router.push("/login");
      return;
    }
  }, [router, token]);

  const { data: tests, isLoading, error } = useGetAllMockTest();

  if (isLoading) {
    return (
      <div className=" flex items-center justify-center h-screen">
        <LineLoader />
      </div>
    );
  }

  if (error)
    return <p className="h-screen flex justify-center mt-10">{error}</p>;

  return (
    <div className="p-6 max-w-4xl mx-auto h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Available Mock Tests
      </h1>
      {tests.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {tests.map((test) => (
            <TestCard
              key={test._id}
              test={test}
              reattemptAllowed={test.reattemptAllowed}
            />
          ))}
        </div>
      ) : (
        <p>No tests available at the moment.</p>
      )}
    </div>
  );
}
