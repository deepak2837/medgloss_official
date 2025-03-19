"use client";

import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { useParams } from "next/navigation";
import { GrLinkNext } from "react-icons/gr";
import { GrLinkPrevious } from "react-icons/gr";
import debounce from "lodash.debounce"; // Import debounce
import LineLoader from "@/components/common/Loader";
import Image from "next/image";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const QuestionBankPage = () => {
  const params = useParams();
  const { id } = params;

  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [filter, setFilter] = useState({ subject: "", topic: "" });
  const [topics, setTopics] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [userId, setUserId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [token, setToken] = useState();
  useEffect(() => {
    if (typeof window !== "undefined") {
      const user = localStorage.getItem("user");
      const token = localStorage.getItem("token");
      if (user) {
        setUserId(JSON.parse(user).userId);
        setToken(token);
      }
    }
  }, []);

  useEffect(() => {
    if (id) {
      fetchQuestions(); // Fetch questions when id or pagination/filter changes
    }
  }, [id, currentPage, filter]);

  const fetchQuestions = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `${BASE_URL}/api/v1/question-bank/${id}/questions`,
        {
          params: { page: currentPage, limit: 5 }, // Add pagination params
        }
      );

      setQuestions(response.data.questions);
      setTotalPages(response.data.totalPages);
      setCurrentQuestionIndex(0); // Reset to the first question of the page
    } catch (error) {
      console.error("Error fetching questions:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchSubjects = async () => {
    try {
      const response = await axios.get(
        `${BASE_URL}/api/v1/question-bank/${id}/subjects`
      );
      setSubjects(response.data.subjects);
    } catch (error) {
      console.error("Error fetching subjects:", error);
    }
  };

  const fetchTopics = async () => {
    try {
      const response = await axios.get(
        `${BASE_URL}/api/v1/question-bank/${id}/topics`
      );
      setTopics(response.data.topics);
    } catch (error) {
      console.error("Error fetching topics:", error);
    }
  };
  const fetchFilteredQuestions = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `${BASE_URL}/api/v1/question-bank/${id}/questions`,
        {
          params: {
            subject: filter.subject,
            topic: filter.topic,
            page: currentPage,
            limit: 5,
          },
        }
      );
      console.log(response.data);
      setQuestions(response.data.questions);
      setTotalPages(response.data.totalPages);
      setCurrentQuestionIndex(0); // Reset to the first question of the page
    } catch (error) {
      console.error("Error fetching filtered questions:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Debounce function for handling search filter
  const debouncedFetchFilteredQuestions = useCallback(
    debounce(() => {
      setCurrentPage(1); // Reset to the first page on filter change
      fetchFilteredQuestions();
    }, 500), // Delay in milliseconds
    [filter]
  );

  const handleOptionClick = async (option, questionId) => {
    const isCorrect =
      option === questions.find((q) => q._id === questionId)?.correctAnswer;

    setSelectedOptions((prev) => ({
      ...prev,
      [questionId]: { selected: option, isCorrect },
    }));

    try {
      await axios.post(
        `${BASE_URL}/api/v1/question-bank/questions/attempt`,
        {
          candidateId: userId,
          questionId: questionId,
          answeredCorrectly: isCorrect,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
    } catch (error) {
      console.error("Error recording attempt:", error);
    }
  };

  useEffect(() => {
    setCurrentQuestionIndex(0); // Reset to first question when questions change
  }, [questions]);

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
      setCurrentQuestionIndex(0); // Reset to the first question of the new page
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    } else if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
      setCurrentQuestionIndex(questions.length - 1); // Reset to the last question of the new page
    }
  };

  const handleFilterChange = (e) => {
    setFilter({ ...filter, [e.target.name]: e.target.value });
  };

  if (isLoading)
    return (
      <div className="flex items-center justify-center min-h-screen">
        <LineLoader />
      </div>
    );

  if (!questions.length) return <p>No questions available</p>;

  return (
    <div className="container mx-auto p-4  max-w-4xl">
      {/* Filter Section */}
      <div className="flex flex-row items-center gap-4 mb-4">
        {/* Subject Filter */}
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Select Subject:
          </label>
          <select
            name="subject"
            value={filter.subject}
            onClick={fetchSubjects}
            onChange={(e) => {
              handleFilterChange(e);
              debouncedFetchFilteredQuestions();
            }}
            className="border border-gray-300 p-2 rounded w-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
          >
            <option value="">All Subjects</option>
            {subjects.map((subject, index) => (
              <option key={index} value={subject}>
                {subject}
              </option>
            ))}
          </select>
        </div>

        {/* Topic Filter */}
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Select Topic:
          </label>
          <select
            name="topic"
            value={filter.topic}
            onClick={fetchTopics}
            onChange={(e) => {
              handleFilterChange(e);
              debouncedFetchFilteredQuestions();
            }}
            className="border border-gray-300 p-2 rounded w-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
          >
            <option value="">All Topics</option>
            {topics.map((topic, index) => (
              <option key={index} value={topic}>
                {topic}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Question Display Section */}
      <div className="space-y-4">
        {questions.map((question, index) => (
          <div key={question._id} className="border p-4 rounded-xl shadow">
            {question.isImageBased && (
              <Image
                src={question.questionImage}
                alt="Question Image"
                className="w-full h-64 object-cover rounded mb-4"
              />
            )}
            <h3 className="text-lg font-semibold mb-4">
              {question.questionText}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {question.options.map((option, optionIndex) => {
                const selectedData = selectedOptions[question._id] || {};
                const isSelected = selectedData.selected === option;
                const isCorrect = option === question.correctAnswer;
                const isWrong = isSelected && !isCorrect;

                return (
                  <button
                    key={optionIndex}
                    onClick={() => handleOptionClick(option, question._id)}
                    className={`border p-2 rounded shadow text-left
        ${isSelected ? (isWrong ? "bg-red-200" : "bg-green-200") : ""}
        ${selectedData.selected && isCorrect ? "bg-green-200" : ""}`}
                    disabled={!!selectedData.selected}
                  >
                    {option}
                  </button>
                );
              })}
            </div>

            {selectedOptions[question._id] && (
              <div className="mt-4">
                <p className="text-lg font-semibold">
                  Correct Answer:{" "}
                  <span className="text-green-600">
                    {question.correctAnswer}
                  </span>
                  <p className="text-gray-600">
                    explanation:{question.explanation}
                  </p>
                </p>
              </div>
            )}
          </div>
        ))}

        {/* Pagination Info */}
        <div className="mt-4 flex gap-4 justify-between">
          <button
            onClick={handlePreviousQuestion}
            disabled={currentPage === 1}
            className="bg-gray-500 text-white p-2 rounded shadow disabled:opacity-50"
          >
            <GrLinkPrevious className="text-xl" />
          </button>
          <p className="text-center text-lg">
            Page {currentPage} of {totalPages}
          </p>
          <button
            onClick={handleNextQuestion}
            disabled={currentPage === totalPages}
            className="bg-blue-500 text-white p-2 rounded shadow disabled:opacity-50"
          >
            <GrLinkNext className="text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuestionBankPage;
