"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { DataGrid } from "@mui/x-data-grid";
import { toast, Toaster } from "react-hot-toast";
import { get } from "mongoose";
import useAuthStore from "@/store/authStore";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export default function EditQuestionBank({ params }) {
  const [loading, setLoading] = useState(true);
  const [bankDetails, setBankDetails] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [mediaFile, setMediaFile] = useState(null);
  const [showUrlInput, setShowUrlInput] = useState(false);
  const [newMediaUrl, setNewMediaUrl] = useState("");
  const STATUS_OPTIONS = ["draft", "live", "dead"];

  const router = useRouter();

  // Form state

  const [searchText, setSearchText] = useState("");
  const [filters, setFilters] = useState({
    subject: "all",
    difficulty: "all",
    exam: "all",
  });

  const [dynamicFilters, setDynamicFilters] = useState({
    subjects: [],
    exams: [],
    difficulties: [],
  });
  const [formData, setFormData] = useState({
    name: "",
    title: "",
    type: "exam",
    category: "Medical",
    for: [], // Initialize as empty array
    tags: [], // Initialize as empty array
    status: "draft",
  });

  const [existingMedia, setExistingMedia] = useState(null);
  const [showMediaUpload, setShowMediaUpload] = useState(false);
  const [tagInput, setTagInput] = useState("");
  const [forInput, setForInput] = useState("");
  const [updateMethod, setUpdateMethod] = useState(null); // 'file' or 'url'
  const [forInputValue, setForInputValue] = useState("");
  const [tagsInputValue, setTagsInputValue] = useState("");
const {getToken} =  useAuthStore()

  // Add auth check hook at the top
useEffect(() => {
  const token = getToken()
  if (!token) {
    toast.error('Please login to continue');
    router.push('/login');
    return;
  }
}, []);
  // Add JSX for media section
  // Fetch existing data
  useEffect(() => {
    const fetchBankDetails = async () => {
      try {
        const response = await fetch(`${BASE_URL}/api/v1/question-bank/view/${params.id}`,{headers: {
          'Authorization': `Bearer ${getToken()}`}});
        const data = await response.json();
        if (data.success) {
          // Set form data
          setFormData({
            name: data.data.name || "",
            title: data.data.title || "",
            type: data.data.type || "exam",
            category: data.data.category || "Medical",
            for: data.data.for || [],
            tags: data.data.tags || [],
            status: data.data.status || "draft",
          });

          // Set media data
          if (data.data.image || data.data.video) {
            setExistingMedia({
              type: data.data.image ? "image" : "video",
              url: data.data.image || data.data.video,
            });
          }
        }
      } catch (error) {
        toast.error("Error fetching bank details");
      }
    };
    fetchBankDetails();
  }, [params.id]);

  const handleFileUpdate = async (file) => {
    try {
      const formData = new FormData();
      formData.append('file', file);
  
      const token = getToken();
      const response = await fetch(`${BASE_URL}/api/v1/question-bank/update-media/${params.id}`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`
        },
        body: formData
      });
      const data = await response.json();
      if (data.success) {
        setExistingMedia({
          type: data.data.image ? "image" : "video",
          url: data.data.image || data.data.video,
        });
        toast.success("Media updated successfully");
      }
    } catch (error) {
      toast.error("Error updating media");
    }
  };
  const handleUrlUpdate = async () => {
    try {
      const token = getToken();
      const response = await fetch(`${BASE_URL}/api/v1/question-bank/update-media-url/${params.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',

          'Authorization': `Bearer ${token}`
     
        },
        body: JSON.stringify({ url: newMediaUrl })
      });
  
      const data = await response.json();
      if (data.success) {
        setExistingMedia({
          type: data.data.image ? "image" : "video",
          url: data.data.image || data.data.video,
        });
        setShowUrlInput(false);
        setNewMediaUrl("");
        toast.success("Media URL updated successfully");
      }
    } catch (error) {
      toast.error("Error updating media URL");
    }
  };
  const handleUpdateMedia = async (file) => {
    try {
      const formData = new FormData();
      formData.append('file', file);
   const token=   getToken();
      const response = await fetch(`${BASE_URL}/api/v1/question-bank/update-media/${params.id}`, {
        method: 'PUT',
        
        headers: {
          'Authorization': `Bearer ${token}`
        },
        body: formData
      });
  
      const data = await response.json();
      if (data.success) {
        setExistingMedia({
          type: data.data.image ? "image" : "video",
          url: data.data.image || data.data.video,
        });
        toast.success("Media updated successfully");
      }
    } catch (error) {
      toast.error("Error updating media");
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
    
      const response = await fetch(
        `${BASE_URL}/api/v1/question-bank/update/${params.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`,
          },
          body: JSON.stringify({
            name: formData.name,
            title: formData.title,
            type: formData.type,
            category: formData.category,
            for: formData.for,
            tags: formData.tags,
            status: formData.status,
          }),
        }
      );

      const data = await response.json();
      if (data.success) {
        toast.success("Question bank updated successfully");
        // Fetch updated data
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  // Add useEffect for dynamic filters
  useEffect(() => {
    if (questions.length > 0) {
      setDynamicFilters({
        subjects: [...new Set(questions.map((q) => q.subject))],
        exams: [...new Set(questions.map((q) => q.exam))],
        difficulties: [...new Set(questions.map((q) => q.difficulty))],
      });
    }
  }, [questions]);

  // Add filter logic
  const filteredQuestions = questions.filter((question) => {
    const matchesSearch = question.question
      .toLowerCase()
      .includes(searchText.toLowerCase());
    const matchesSubject =
      filters.subject === "all" || question.subject === filters.subject;
    const matchesDifficulty =
      filters.difficulty === "all" ||
      question.difficulty === filters.difficulty;
    const matchesExam =
      filters.exam === "all" || question.exam === filters.exam;

    return matchesSearch && matchesSubject && matchesDifficulty && matchesExam;
  });
  // Fetch bank details
  useEffect(() => {
    const fetchBankDetails = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch(
          `${BASE_URL}/api/v1/question-bank/view/${params.id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const data = await response.json();
        if (data.success) {
          const bank = data.data;
          setFormData({
            ...bank,
            for: Array.isArray(bank.for) ? bank.for : [],
            tags: Array.isArray(bank.tags) ? bank.tags : [],
          });
          // Set input values
          setForInputValue(Array.isArray(bank.for) ? bank.for.join(", ") : "");
          setTagsInputValue(
            Array.isArray(bank.tags) ? bank.tags.join(", ") : ""
          );
        }
        setLoading(false);
      } catch (error) {
        toast.error("Error fetching bank details");
      }
    };
    fetchBankDetails();
  }, [params.id]);
  // Handle form submission

  // Handle question removal
  const handleRemoveQuestion = async (questionId) => {
    try {
      const response = await fetch(
        `${BASE_URL}/api/v1/question-bank/remove-questions/${params.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ questions: [questionId] }),
        }
      );
      const data = await response.json();
      if (data.success) {
        toast.success("Question removed successfully");
        setQuestions(questions.filter((q) => q._id !== questionId));
      }
    } catch (error) {
      toast.error("Error removing question");
    }
  };

  const columns = [
    {
      field: "question",
      headerName: "Question",
      flex: 2,
      renderCell: (params) => (
        <div className="whitespace-normal">{params.value}</div>
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
      field: "actions",
      headerName: "Actions",
      width: 120,
      renderCell: (params) => (
        <button
          onClick={() => handleRemoveQuestion(params.row._id)}
          className="text-red-600 hover:text-red-800"
        >
          Remove
        </button>
      ),
    },
  ];

  if (loading) return <div>Loading...</div>;

  return (
    <div className="p-6">
      <button
        onClick={() => router.push("/manage-question-bank")}
        className="mb-6 flex items-center gap-2 text-gray-600 hover:text-gray-800"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
          />
        </svg>
        Back to Question Banks
      </button>

      <div className="mb-6 border rounded-lg p-4">
        <div className="flex flex-col gap-4">
          {/* Media Title and Buttons */}
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-medium">Media</h3>
            <div className="flex items-center gap-2">
              <input
                type="file"
                id="fileUpdate"
                className="hidden"
                onChange={(e) => handleFileUpdate(e.target.files[0])}
                accept="image/*,video/*"
              />
              <label
                htmlFor="fileUpdate"
                className="cursor-pointer px-3 py-1.5 text-sm bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Update File
              </label>
              <button
                onClick={() => setShowUrlInput(!showUrlInput)}
                className="px-3 py-1.5 text-sm bg-green-600 text-white rounded hover:bg-green-700"
              >
                Update URL
              </button>
            </div>
          </div>

          {/* URL Input Section */}
          {showUrlInput && (
            <div className="flex items-center gap-2">
              <input
                type="url"
                value={newMediaUrl}
                onChange={(e) => setNewMediaUrl(e.target.value)}
                placeholder="Enter media URL"
                className="flex-1 px-3 py-1.5 border rounded"
              />
              <button
                onClick={handleUrlUpdate}
                className="px-3 py-1.5 text-sm bg-green-600 text-white rounded hover:bg-green-700"
              >
                Save
              </button>
              <button
                onClick={() => {
                  setShowUrlInput(false);
                  setNewMediaUrl("");
                }}
                className="px-3 py-1.5 text-sm text-gray-600 hover:text-gray-800"
              >
                Cancel
              </button>
            </div>
          )}

          {/* Media Preview */}
          {existingMedia && (
            <div className="mt-2">
              {existingMedia.type === "image" ? (
                <img
                  src={existingMedia.url}
                  alt="Question Bank"
                  className="max-w-md rounded shadow-sm"
                />
              ) : (
                <video
                  src={existingMedia.url}
                  controls
                  className="max-w-md rounded shadow-sm"
                />
              )}
            </div>
          )}
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
        <h2 className="text-2xl font-bold mb-6">Edit Question Bank</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name *
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, name: e.target.value }))
                }
                className="mt-1 w-full p-3 bg-gray-50 border border-gray-300 rounded-lg"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Title *
              </label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, title: e.target.value }))
                }
                className="mt-1 w-full p-3 bg-gray-50 border border-gray-300 rounded-lg"
                required
              />
            </div>
            <div>
              <label className="block mb-2">
                Type <span className="text-red-500">*</span>
              </label>
              <select
                required
                value={formData.type}
                onChange={(e) =>
                  setFormData({ ...formData, type: e.target.value })
                }
                className="w-full p-2 border rounded"
              >
                <option value="exam">Exam</option>
                <option value="subject">Subject</option>
                <option value="course">Course</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Category *
              </label>
              <input
                type="text"
                value={formData.category}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, category: e.target.value }))
                }
                className="mt-1 w-full p-3 bg-gray-50 border border-gray-300 rounded-lg"
                required
                defaultValue="Medical"
                disabled
              />
            </div>
            <div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Status *
                </label>
                <select
                  value={formData.status}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, status: e.target.value }))
                  }
                  className="mt-1 w-full p-3 bg-gray-50 border border-gray-300 rounded-lg"
                  required
                >
                  {STATUS_OPTIONS.map((status) => (
                    <option key={status} value={status}>
                      {status.charAt(0).toUpperCase() + status.slice(1)}
                    </option>
                  ))}
                </select>
              </div>

              <label className="block text-sm font-medium text-gray-700">
                Target Audience (comma-separated) *
              </label>
              <input
                type="text"
                value={forInputValue}
                onChange={(e) => {
                  const value = e.target.value;
                  setForInputValue(value);
                  setFormData((prev) => ({
                    ...prev,
                    for: value
                      .split(",")
                      .map((item) => item.trim())
                      .filter(Boolean),
                  }));
                }}
                className="mt-1 w-full p-3 bg-gray-50 border border-gray-300 rounded-lg"
                placeholder="MBBS, MD, etc."
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Tags (comma-separated) *
              </label>
              <input
                type="text"
                value={tagsInputValue}
                onChange={(e) => {
                  const value = e.target.value;
                  setTagsInputValue(value);
                  setFormData((prev) => ({
                    ...prev,
                    tags: value
                      .split(",")
                      .map((tag) => tag.trim())
                      .filter(Boolean),
                  }));
                }}
                className="mt-1 w-full p-3 bg-gray-50 border border-gray-300 rounded-lg"
                placeholder="anatomy, physiology, etc."
                required
              />
            </div>
            {/* Media Preview Card */}

            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
              >
                Update Question Bank
              </button>
            </div>
          </div>
        </form>
      </div>
      {/* Add Filters Section */}
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
      <div className="flex justify-end mb-4">
        <button
          onClick={() =>
            router.push(
              `/manage-question-bank/add-questions-to-bank/${params.id}`
            )
          }
          className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 flex items-center gap-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
            />
          </svg>
          Add Questions to Bank
        </button>
      </div>
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-xl font-bold mb-4">Questions in Bank</h3>
        <DataGrid
          rows={filteredQuestions}
          columns={columns}
          getRowId={(row) => row._id}
          pageSize={10}
          autoHeight
          className="min-h-[400px]"
        />
      </div>
      <Toaster />
    </div>
  );
}
