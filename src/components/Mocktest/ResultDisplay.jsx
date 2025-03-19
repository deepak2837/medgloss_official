"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function ResultDisplay({ result }) {
  const router = useRouter();
  const [showIncorrectAnswers, setShowIncorrectAnswers] = useState(false);

  const onRetry = () => {
    router.push("/mock-test");
  };
  const onExit = () => {
    router.push("/");
  };

  return (
    <div className="max-w-[100%] h-screen flex flex-col items-center mt-10 bg-white text-white mx-4">
      {/* Header Section */}
      <div className="w-full max-w-4xl p-6 bg-main rounded-lg shadow-lg text-center">
        <h2 className="text-4xl font-bold">Test Completed!</h2>
        <p className="mt-4 text-2xl font-semibold">
          You scored <span className="text-green-400">{result.score}</span> out of{" "}
          <span className="text-green-400">{result.totalQuestions}</span>
        </p>
        <p className="mt-2 text-xl">
          Percentage: <span className="text-yellow-400">{result.percentage}%</span>
        </p>
        <button
          onClick={() => setShowIncorrectAnswers(!showIncorrectAnswers)}
          className="mt-6 px-8 py-3 bg-white rounded-full text-black font-semibold  transition"
        >
          {showIncorrectAnswers ? "Hide Incorrect Answers" : "View Incorrect Answers"}
        </button>
      </div>

      {/* Incorrect Answers Section */}
      {showIncorrectAnswers && (
        <div className="w-full max-w-4xl mt-6 bg-main rounded-lg shadow-lg p-4 overflow-y-auto max-h-96">
          <h3 className="text-2xl font-bold mb-4 text-center">Incorrect Answers</h3>
          <div className="space-y-4">
            {result.incorrectAnswersDetails.map((item, idx) => (
              <div
                key={idx}
                className="p-4 bg-white rounded-lg shadow-md"
              >
                <h4 className="text-lg font-semibold text-black">
                  Question {idx + 1}: {item.questionText}
                </h4>
                <p className="mt-2">
                  <span className="font-semibold text-red-500">Your Answer: </span>
                 <span className="text-black">{item.userAnswer || "Not Attempted"}</span> 
                </p>
                <p className="mt-1">
                  <span className="font-semibold text-green-500">Correct Answer: </span>
                  <span className="text-black">{item.correctAnswer || "Not Attempted"}</span> 
                </p>
                <p className="mt-1 text-gray-900">
                  <span className="font-semibold">Explanation: </span>
                  {item.explanation}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Footer Section */}
      <div className="mt-6 flex space-x-4">
        <button
          onClick={onRetry}
          className="px-6 py-3 font-semibold text-black bg-gray-300 rounded-full hover:bg-gray-200 transition"
        >
          Retry Test
        </button>
        <button
          onClick={onExit}
          className="px-6 py-3 font-semibold text-white bg-red-500 rounded-full hover:bg-red-600 transition"
        >
          Exit
        </button>
      </div>
    </div>
  );
}
