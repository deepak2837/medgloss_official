"use client";
import { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { toast, Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import useAuthStore from "@/store/authStore";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const StatisticsModal = ({ isOpen, onClose, questions }) => {
  const [hoverSubject, setHoverSubject] = useState(null);

  // Group questions by subject
  const subjectStats = questions?.reduce((acc, q) => {
    acc[q.subject] = acc[q.subject] || { count: 0, questions: [] };
    acc[q.subject].count += 1;
    acc[q.subject].questions.push(q.question);
    return acc;
  }, {});

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-[600px] relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <h2 className="text-xl font-bold mb-4">Question Bank Statistics</h2>

        <div className="space-y-3">
          {Object.entries(subjectStats).map(([subject, data]) => (
            <div
              key={subject}
              className="flex items-center justify-between p-3 hover:bg-gray-50 rounded"
              onMouseEnter={() => setHoverSubject(subject)}
              onMouseLeave={() => setHoverSubject(null)}
            >
              <span className="font-medium">{subject}</span>
              <span className="relative">
                {data.count} questions
                {/* Hover questions list */}
                {hoverSubject === subject && (
                  <div className="absolute right-0 top-6 bg-white shadow-xl rounded-lg p-4 w-80 z-10">
                    <div className="max-h-48 overflow-y-auto space-y-2">
                      {data.questions.map((q, i) => (
                        <div key={i} className="text-sm text-gray-600">
                          {q}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
const QuestionHoverModal = ({ question, position }) => {
  if (!question) return null;

  return (
    <div
      className="absolute z-50 bg-white rounded-lg shadow-xl p-4 w-96"
      style={{
        top: `${position.y + 20}px`,
        left: `${position.x}px`,
      }}
    >
      <h3 className="font-bold mb-2">{question.question}</h3>
      <div className="space-y-2">
        {Object.entries(question.options).map(([key, value]) => (
          <div
            key={key}
            className={`${
              question.answer === key ? "text-green-600 font-medium" : ""
            }`}
          >
            {key}. {value}
          </div>
        ))}
      </div>
      <div className="mt-3 pt-3 border-t">
        <p className="text-sm text-gray-600">{question.explanation}</p>
      </div>
    </div>
  );
};
export default function AddQuestionsToBank({ params }) {
  const [loading, setLoading] = useState(true);
  const [questionBank, setQuestionBank] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [selectedQuestions, setSelectedQuestions] = useState([]);
  const [bankDetails, setBankDetails] = useState(null);
  const [hoverQuestion, setHoverQuestion] = useState(null);
  const [hoverPosition, setHoverPosition] = useState({ x: 0, y: 0 });
  const [showStats, setShowStats] = useState(false);
  const [searchText, setSearchText] = useState("");
  const {getToken} = useAuthStore()
  const [filters, setFilters] = useState({
    subject: "all",
    difficulty: "all",
    exam: "all",
  });

  const router = useRouter();

// Add dynamic filters state
const [dynamicFilters, setDynamicFilters] = useState({
  subjects: [],
  exams: [],
  difficulties: []
});
// Add auth check hook at the top
useEffect(() => {
  const token = getToken()
  if (!token) {
    toast.error('Please login to continue');
    router.push('/login');
    return;
  }
}, []);
// Update useEffect to set dynamic filters
useEffect(() => {
  if (questions.length > 0) {
    setDynamicFilters({
      subjects: [...new Set(questions.map(q => q.subject))],
      exams: [...new Set(questions.map(q => q.exam))],
      difficulties: [...new Set(questions.map(q => q.difficulty))]
    });
  }
}, [questions]);
const filteredQuestions = questions.filter(question => {
  const matchesSearch = question.question.toLowerCase().includes(searchText.toLowerCase());
  const matchesSubject = filters.subject === 'all' || question.subject === filters.subject;
  const matchesDifficulty = filters.difficulty === 'all' || question.difficulty === filters.difficulty;
  const matchesExam = filters.exam === 'all' || question.exam === filters.exam;
  
  return matchesSearch && matchesSubject && matchesDifficulty && matchesExam;
});
// Add filter logic

  const fetchExistingQuestions = async () => {
    try {
      const response = await fetch(`${BASE_URL}/api/v1/question-bank/questions/${params.id}`,{headers: {
        'Authorization': `Bearer ${getToken()}`}});
      const data = await response.json();

      if (data.success) {
        console.log("Existing Questions:", data.data);
        // Store only IDs as strings
        const existingIds = data.data?.map((q) => q._id.toString());
        console.log("Existing Question IDs:", existingIds);
        // setExistingBankQuestions(existingIds);
        return existingIds; // Return for immediate use
      }
    } catch (error) {
      toast.error("Error fetching existing questions");
      return [];
    }
  };
  const fetchBankDetails = async () => {
    try {
      const response = await fetch(`${BASE_URL}/api/v1/question-bank/view/${params.id}` ,{headers: {
        'Authorization': `Bearer ${getToken()}`}
      });
      const data = await response.json();
      if (data.success) console.log("Bank Details:", data.data);
      {
        setBankDetails(data.data);
      }
    } catch (error) {
      toast.error("Error fetching bank details");
    }
  };
  const fetchAllQuestions = async (existingIds) => {
    console.log("Existing IDs reached here :", existingIds);
    try {
      const response = await fetch(`${BASE_URL}/api/v1/questions`,{headers: {
        'Authorization': `Bearer ${getToken()}`}});
      const data = await response.json();

      if (data.success) {
        // Create Set of existing IDs for efficient lookup

        const existingIdSet = new Set(existingIds);
        console.log("Existing ID Set:", existingIdSet);

        // Filter out questions already in bank
        const filteredQuestions = data.data.filter(
          (question) => !existingIdSet.has(question._id.toString())
        );

        setQuestions(filteredQuestions);
      }
      setLoading(false);
    } catch (error) {
      toast.error("Error fetching questions");
      setLoading(false);
    }
  };

  // Initialize data
  useEffect(() => {
    const initializeData = async () => {
      setLoading(true);
      await fetchBankDetails();
      const existingIds = await fetchExistingQuestions();
      await fetchAllQuestions(existingIds);
    };

    initializeData();
  }, [params.id]);

  const handleAddQuestions = async () => {
    if (!selectedQuestions.length) {
      toast.error("Please select questions to add");
      return;
    }

    try {
      const token = getToken();
      const response = await fetch(
        `${BASE_URL}/api/v1/question-bank/add-questions/${params.id}`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ questions: selectedQuestions }),
        }
      );

      const data = await response.json();
      if (data.success) {
        toast.success("Questions added successfully");
        setSelectedQuestions([]);
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const columns = [
    {
      field: "question",
      headerName: "Question",
      flex: 2,
      renderCell: (params) => (
        <div
          className="whitespace-normal cursor-pointer"
          onMouseEnter={(e) => {
            setHoverQuestion(params.row);
            setHoverPosition({
              x: e.clientX,
              y: e.clientY,
            });
          }}
          onMouseLeave={() => setHoverQuestion(null)}
        >
          {params.value}
        </div>
      ),
    },
    {
      field: "subject",
      headerName: "Subject",
      width: 150,
    },
    {
      field: "difficulty",
      headerName: "Difficulty",
      width: 120,
    },
    {
      field: "exam",
      headerName: "Exam",
      width: 150,
    },
  ];

  if (loading) return <div>Loading...</div>;

  return (
    <div className="p-4 relative">
      <button
        onClick={() => router.push("/manage-question-bank")}
        className="mb-4 px-4 py-2 text-sm font-medium text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 flex items-center gap-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
            clipRule="evenodd"
          />
        </svg>
        Back to Question Banks
      </button>
      {bankDetails && (
        <div className="bg-white rounded-lg shadow p-4 mb-4">
          <h2 className="text-xl font-bold mb-2">{bankDetails.name}</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-gray-600">Exam</p>
              <p className="font-medium">{bankDetails.exam}</p>
            </div>
            <div>
              <p className="text-gray-600">Subject</p>
              <p className="font-medium">{bankDetails.subject}</p>
            </div>
            <div className="flex items-center gap-4">
              <div>
                <p className="text-gray-600">Total Questions</p>
                <p className="font-medium">
                  {bankDetails.questions?.length || 0}
                </p>
              </div>
              <button
                onClick={() => setShowStats(true)}
                className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg 
          hover:bg-indigo-700 active:bg-indigo-800 transition-colors duration-150 font-medium 
          shadow-sm hover:shadow focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zm6-4a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zm6-3a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                </svg>
                Statistics
              </button>
            </div>
          </div>
        </div>
      )}
      <StatisticsModal
        isOpen={showStats}
        onClose={() => setShowStats(false)}
        questions={bankDetails?.questions || []}
      />
      {/* Filters */}
      <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
        <div className="space-y-6">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg
                className="h-5 w-5 text-gray-400"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search questions..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className="pl-10 w-full p-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Subject
              </label>
              <select
                value={filters.subject}
                onChange={(e) =>
                  setFilters((prev) => ({ ...prev, subject: e.target.value }))
                }
                className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg"
              >
                <option value="all">All Subjects</option>
                {dynamicFilters.subjects.map((subject) => (
                  <option key={subject} value={subject}>
                    {subject}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Exam
              </label>
              <select
                value={filters.exam}
                onChange={(e) =>
                  setFilters((prev) => ({ ...prev, exam: e.target.value }))
                }
                className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg"
              >
                <option value="all">All Exams</option>
                {dynamicFilters.exams.map((exam) => (
                  <option key={exam} value={exam}>
                    {exam}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Difficulty
              </label>
              <select
                value={filters.difficulty}
                onChange={(e) =>
                  setFilters((prev) => ({
                    ...prev,
                    difficulty: e.target.value,
                  }))
                }
                className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg"
              >
                <option value="all">All Difficulties</option>
                {dynamicFilters.difficulties.map((difficulty) => (
                  <option key={difficulty} value={difficulty}>
                    {difficulty}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex justify-end">
            <button
              onClick={() => {
                setSearchText("");
                setFilters({
                  subject: "all",
                  difficulty: "all",
                  exam: "all",
                });
              }}
              className="text-gray-600 hover:text-gray-800 px-4 py-2 rounded-lg flex items-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              Reset Filters
            </button>
          </div>
        </div>
      </div>
      {hoverQuestion && (
        <QuestionHoverModal question={hoverQuestion} position={hoverPosition} />
      )}
      {/* Questions Table */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <DataGrid
          rows={filteredQuestions}
          columns={columns}
          getRowId={(row) => row._id} // Add this line to use MongoDB _id
          checkboxSelection
          onRowSelectionModelChange={(newSelection) => {
            setSelectedQuestions(newSelection);
          }}
          rowSelectionModel={selectedQuestions}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 10 },
            },
          }}
          pageSizeOptions={[5, 10, 20]}
        />
      </div>

      {/* Add Selected Questions Button */}
      <div className="mt-6 flex justify-end">
        <button
          onClick={handleAddQuestions}
          disabled={selectedQuestions.length === 0}
          className={`px-6 py-2 rounded-lg ${
            selectedQuestions.length > 0
              ? "bg-blue-600 hover:bg-blue-700 text-white cursor-pointer"
              : "bg-gray-300 cursor-not-allowed text-gray-500"
          }`}
        >
          Add Selected Questions ({selectedQuestions.length})
        </button>
      </div>

      <Toaster />
    </div>
  );
}
