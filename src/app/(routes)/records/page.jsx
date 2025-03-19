"use client";

import { useRouter } from "next/navigation";
import LineLoader from "@/components/common/Loader";
import useGetMockTestResultRecord from "@/hooks/mock-test/useGetMockTestResultRecord";

export default function RecordsList() {
  const router = useRouter();
  const { data: records, isLoading } = useGetMockTestResultRecord();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <LineLoader />
      </div>
    );
  }

  if (!records.length) {
    return (
      <p className="text-center text-gray-500 mt-24 h-screen">
        No records found.
      </p>
    );
  }

  return (
    <div className=" max-w-full md:mx-auto mt-5 flex flex-col items-center  md:h-screen">
      <h2 className="text-3xl font-bold mb-6 text-center">Your Records</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
        {records.map((record) => (
          <div
            key={record._id} // Ensure to use the actual unique identifier from your data
            className="py-3 px-6 w-[250px] bg-main border shadow hover:cursor-pointer hover:shadow-md transition-shadow text-white rounded-xl"
            onClick={() => router.push(`/records/result/${record.testId._id}`)} // Adjust route as needed
          >
            <h3 className="text-lg font-semibold">
              {record.testId?.testName || "Test Name Unavailable"}
            </h3>

            <p className="text-gray-100">
              Date:{" "}
              {record.attemptedAt
                ? new Date(record.attemptedAt).toLocaleDateString()
                : "N/A"}
            </p>
            <p className="text-gray-100">
              Number of Questions: {record.testId?.numberOfQuestions || "N/A"}
            </p>
            <button
              // onClick={handleStartTest}
              className="mt-2 px-3 py-1 bg-white text-black text-base rounded-xl"
            >
              View
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
