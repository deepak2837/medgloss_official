"use client";

import { useParams } from "next/navigation";
import useGetMockTestResultRecordDetails from "@/hooks/mock-test/useGetMockTestResultRecordDetails";

export default function ResultDetails() {
  const { id } = useParams();
  const { data: result, isLoading } = useGetMockTestResultRecordDetails(id);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!result) {
    return <p>No result found.</p>;
  }

  return (
    <div className="p-6 max-w-2xl mx-auto h-screen">
      <h2 className="text-2xl font-semibold mb-4">{result.testName}</h2>
      <p className="mb-2">Score: {result.score}</p>
      <p className="mb-2">Percentage: {result.percentage}%</p>

      <h3 className="text-lg font-semibold mb-2">
        Incorrectly Attempted Questions:
      </h3>
      <ul className="list-disc ">
        {result.incorrectAnswersDetails.map((question, idx) => (
          <li key={idx} className="mb-4">
            <p className="font-medium">{question.questionText}</p>
            <p className="text-red-500">Your Answer: {question.userAnswer}</p>
            <p className="text-green-500">
              Correct Answer: {question.correctAnswer}
            </p>
            <p className="text-gray-600">explanation:{question.explanation}</p>
          </li>
        ))}
      </ul>
    </div>
  );

  
}



