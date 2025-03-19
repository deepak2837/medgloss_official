"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import OptionButton from "@/components/Mocktest/OptionButton";
import Timer from "@/components/Mocktest/Timer";
import { useParams } from "next/navigation";
import Image from "next/image";
import LineLoader from "@/components/common/Loader";
import useGetMockTestQuestions from "@/hooks/mock-test/useGetMockTestQuestions";
import useSubmitMockTest from "@/hooks/mock-test/useSubmitMockTest";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export default function TakeTest() {
  const router = useRouter();
  const params = useParams();
  const { id } = params;

  const [questions, setQuestions] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [timeLimit, setTimeLimit] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const { data, isLoading, isError } = useGetMockTestQuestions(id);
  const { onSubmitTest, isLoading: formSubmitLoading } = useSubmitMockTest();

  useEffect(() => {
    if (data && data.questions) {
      setQuestions(data.questions);
      setSelectedOptions(Array(data.questions.length).fill(null));
      setTimeLimit(data.timeLimit);
      document.documentElement.requestFullscreen().catch(console.error);
    }
  }, [data]);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        alert("You left the test. The test will now end.");
        handleSubmit();
      }
    };

    const handleFullscreenChange = () => {
      if (!document.fullscreenElement) {
        alert("You exited full-screen. The test will now end.");
        handleSubmit();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    document.addEventListener("fullscreenchange", handleFullscreenChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, [id]);

  const handleSubmit = async () => {
    const formData = { mockTestId: id, selectedOptions };
    await onSubmitTest(id, formData);
  };

  const handleSelectOption = (optionIndex) => {
    const newSelectedOptions = [...selectedOptions];
    newSelectedOptions[currentQuestionIndex] = optionIndex;
    setSelectedOptions(newSelectedOptions);
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <LineLoader />
      </div>
    );
  }

  if (isError || !questions.length) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div>Error loading test or no questions found.</div>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="p-6 max-w-lg mx-auto ">
      <Timer duration={timeLimit * 60} onEnd={handleSubmit} />
      <div className="mb-4">
        <h2 className="text-lg mb-2">
          Question {currentQuestionIndex + 1} of {questions.length}
        </h2>
        {currentQuestion.imageUrl && (
          <div className="mb-4">
            <Image
              src={currentQuestion.imageUrl}
              alt={`Question ${currentQuestionIndex + 1}`}
              width={200}
              height={200}
              className="w-full h-auto object-cover rounded"
            />
          </div>
        )}
        <h3 className="mb-4">{currentQuestion.questionText}</h3>
        {currentQuestion.options.map((option, optionIdx) => (
          <OptionButton
            key={optionIdx}
            text={option}
            isSelected={selectedOptions[currentQuestionIndex] === optionIdx}
            onSelect={() => handleSelectOption(optionIdx)}
          />
        ))}
      </div>
      <div className="flex justify-between mt-4">
        <button
          onClick={handlePrevious}
          disabled={currentQuestionIndex === 0}
          className={`px-4 py-2 rounded ${
            currentQuestionIndex === 0
              ? "bg-gray-300"
              : "bg-blue-500 text-white"
          }`}
        >
          Previous
        </button>
        {currentQuestionIndex === questions.length - 1 ? (
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-main text-white rounded"
          >
            Submit Test
          </button>
        ) : (
          <button
            onClick={handleNext}
            className={`px-4 py-2 rounded ${
              currentQuestionIndex === questions.length - 1
                ? "bg-gray-300"
                : "bg-main text-white"
            }`}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
}
