"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import LineLoader from "@/components/common/Loader";
import { useRouter } from "next/navigation";
import Image from "next/image";
import useAuthStore from "@/store/authStore";
import useGetQuestions from "@/hooks/question-bank/useGetQuestions";

const Page = () => {
  const router = useRouter();
  const { getToken } = useAuthStore();
  const token = getToken();
  const { data: questionBanks, isLoading, isError } = useGetQuestions();

  useEffect(() => {
    if (!token) {
      router.push("/login");
    }
  }, [token, router]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <LineLoader />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div>Error loading question banks. Please try again.</div>
      </div>
    );
  }

  if (!questionBanks) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div>No question banks found.</div>
      </div>
    );
  }

  const groupedBanks = questionBanks.reduce((acc, bank) => {
    acc[bank.examType] = acc[bank.examType] || [];
    acc[bank.examType].push(bank);
    return acc;
  }, {});

  return (
    <div className="max-w-4xl mx-auto p-4 h-screen">
      <h1 className="text-2xl font-bold mb-4 text-center">Question Banks</h1>
      {Object.keys(groupedBanks).map((examType) => (
        <div key={examType} className="mb-6">
          <h2 className="text-xl font-semibold mb-2">{examType}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {groupedBanks[examType].map((bank) => (
              <Link
                href={`/question-bank/questions/${bank._id}`}
                key={bank._id}
              >
                <div className="border rounded-lg shadow-lg bg-main cursor-pointer text-white transform transition-transform hover:scale-105">
                  <div className="overflow-hidden rounded-xl">
                    <Image
                      src={bank.image}
                      alt={bank.name}
                      className="w-full h-40 object-cover"
                      width={500}
                      height={200}
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2">{bank.name}</h3>
                    <p className="text-sm opacity-90 mb-1">
                      <span className="font-bold">Topic:</span> {bank.topic}
                    </p>
                    <p className="text-sm opacity-90 mb-1">
                      <span className="font-bold">Subject:</span> {bank.subject}
                    </p>
                    <p className="text-sm opacity-90">
                      <span className="font-bold">Questions:</span>{" "}
                      {bank.numberOfQuestions}
                    </p>
                    <p className="text-sm opacity-90">
                      <span className="font-bold">Attempted:</span> 2
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Page;
