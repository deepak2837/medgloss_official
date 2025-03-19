"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast, Toaster } from "react-hot-toast";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  IconButton,
  CircularProgress,
} from "@mui/material";
import {
  Add as AddIcon,
  Delete as DeleteIcon,
  CloudUpload as CloudUploadIcon,
  Link as LinkIcon,
  ArrowBack as ArrowBackIcon,
} from "@mui/icons-material";
import useAuthStore from "@/store/authStore";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

// Constants (good practice to keep these)
const EXAM_OPTIONS = [
  "NEET-PG",
  "INI-CET",
  "FMGE",
  "USMLE",
  "NEET-UG",
  "NEET-SS",
  "AIIMS-PG",
  "JIPMER-PG",
  "MRCP",
];
const MEDICAL_SUBJECTS = [
  "Anatomy",
  "Physiology",
  "Biochemistry",
  "Pathology",
  "Microbiology",
  "Pharmacology",
  "Forensic Medicine and Toxicology (FMT)",
  "Community Medicine",
  "Ophthalmology",
  "Otorhinolaryngology (ENT)",
  "Medicine",
  "Surgery",
  "Obstetrics and Gynecology",
  "Pediatrics",
  "Orthopedics",
  "Dermatology",
  "Psychiatry",
  "Radiology",
  "Anesthesiology",
];

const DIFFICULTY_LEVELS = ['easy', 'medium', 'hard'];
const STATUS_OPTIONS = ['active', 'inactive', 'draft', 'banned'];
const TOOL_OPTIONS = ["manual", "script", "other"];

export default function EditQuestion({ params }) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [tagInput, setTagInput] = useState('');
  const {getToken}= useAuthStore();
  const [updating, setUpdating] = useState(false);
  const [toolType, setToolType] = useState('manual');
  const [uploadType, setUploadType] = useState("file");
const [file, setFile] = useState(null);
const [mediaUrl, setMediaUrl] = useState("");

  const [formData, setFormData] = useState({
    question: '',
    options: { a: '', b: '' },
    answer: '',
    explanation: '',
    exam: '',
    subject: '',
    tool: '',
    code: '',
    difficulty: 'easy',
    tags: [],
    status: 'active'
  });
  const [showUrlInput, setShowUrlInput] = useState(false);
  const [newMediaUrl, setNewMediaUrl] = useState('');
  const [existingMedia, setExistingMedia] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = getToken();
    if (!token) {
      router.push('/login');
      return;
    }
  }, []);
  // Add image update handlers
  const handleFileUpdate = async (file) => {
    try {
      const formData = new FormData();
      formData.append('image', file);

      const response = await fetch(`${BASE_URL}/api/v1/questions/${params.id}/image`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${getToken()}`
        },
        body: formData
      });

      const data = await response.json();
      if (data.success) {
        setExistingMedia({
          type: 'image',
          url: data.data.image
        });
        toast.success('Image updated successfully');
      }
    } catch (error) {
      toast.error('Error updating image');
    }
  };

  const handleUrlUpdate = async () => {
    try {
      const token = getToken();
      const response = await fetch(`${BASE_URL}/api/v1/questions/${params.id}/image-url`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ imageUrl: newMediaUrl })
      });

      const data = await response.json();
      if (data.success) {
        setExistingMedia({
          type: 'image',
          url: data.data.image
        });
        setShowUrlInput(false);
        setNewMediaUrl('');
        toast.success('Image URL updated successfully');
      } else {
        throw new Error(data.message || 'Failed to update image URL');
      }
    } catch (error) {
      console.error('Error updating image URL:', error);
      toast.error(error.message || 'Error updating image URL');
    }
  };
  useEffect(() => {
    if (formData.tags?.length > 0) {
      setTagInput(formData.tags.join(', '));
    }
  }, []);

  useEffect(() => {
    fetchQuestionData();
  }, []);
  useEffect(() => {
    const fetchQuestionDetails = async () => {
      try {
        const response = await fetch(`${BASE_URL}/api/v1/questions/${params.id}`, {
          headers: {
            Authorization: `Bearer ${getToken()}`
          }
        });
        const data = await response.json();
        console.log(data);
        if (data.image) {
          setExistingMedia({
            type: 'image',
            url: data.image
          });
        }
        // ...existing code...
      } catch (error) {
        toast.error('Error fetching question details');
      }
    };
    fetchQuestionDetails();
  }, [params.id]);

  const fetchQuestionData = async () => {
    try {
      const token = getToken()
      const response = await fetch(
        `${BASE_URL}/api/v1/questions/${params.id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();

      if (data) {
        // Initialize form data with fetched question data
        setFormData({
          question: data.question || "",
          options: data.options || { a: "", b: "" },
          answer: data.answer || "",
          explanation: data.explanation || "",
          exam: data.exam || "",
          subject: data.subject || "",
          tool: TOOL_OPTIONS.includes(data.tool) ? data.tool : "other", //Handle 'other' tool
          code: data.code || "",
          difficulty: data.difficulty || "easy",
          tags: data.tags || [],
          status: data.status || "active", // Keep status, even if not editing it
        });
        setToolType(TOOL_OPTIONS.includes(data.tool) ? data.tool : "other"); //Set initial tool type.

        // Set initial media, if present
        if (data.image) {
          setExistingMedia({
            type: 'image',
            url: data.image
          });
        }
      } else {
        toast.error(data.message || "Failed to fetch question");
        router.push("/manage-questions"); // Redirect on failure
      }
    } catch (error) {
      toast.error("Error fetching question: " + error.message);
      router.push("/manage-questions");
    } finally {
      setLoading(false);
    }
  };
useEffect(() => {
  fetchQuestionData();
}, [params.id, router]); // params.id as dependency is crucial

// --- Input Change Handlers ---
const handleInputChange = (e) => {
  const { name, value } = e.target;
  // Handle "other" tool separately
  if (name === "tool" && value === "other") {
    setToolType("other");
    setFormData((prev) => ({ ...prev, tool: "" })); // Clear the 'tool' field if other is selected
  } else if (name === "tool" && toolType === "other") {
    setFormData((prev) => ({ ...prev, tool: value }));
  } else if (name === "tool") {
    setToolType(value);
    setFormData((prev) => ({ ...prev, tool: value }));
  } else {
    setFormData((prev) => ({ ...prev, [name]: value }));
  }
};

const handleOptionChange = (key, value) => {
  setFormData((prev) => ({
    ...prev,
    options: { ...prev.options, [key]: value },
  }));
};

// --- Option Management (Add/Remove) ---
const addOption = () => {
  if (Object.keys(formData.options).length >= 5) {
    toast.error("Maximum 5 options allowed");
    return;
  }
  const keys = Object.keys(formData.options);
  const nextKey = String.fromCharCode(97 + keys.length); // 'a', 'b', 'c', ...
  setFormData((prev) => ({
    ...prev,
    options: { ...prev.options, [nextKey]: "" },
  }));
};

const removeOption = (keyToRemove) => {
  if (Object.keys(formData.options).length <= 2) {
    toast.error("Minimum 2 options required");
    return;
  }
  const newOptions = {};
  let currentChar = "a";
  Object.entries(formData.options).forEach(([key, value]) => {
    if (key !== keyToRemove) {
      newOptions[currentChar] = value;
      currentChar = String.fromCharCode(currentChar.charCodeAt(0) + 1);
    }
  });
  setFormData((prev) => ({
    ...prev,
    options: newOptions,
    answer: prev.answer === keyToRemove ? "" : prev.answer, // Clear answer if removed
  }));
};

// --- File/URL Handling ---
const handleFileChange = (e) => {
  const selectedFile = e.target.files[0];
  if (selectedFile) {
    // Basic file type validation (MIME type check)
    if (
      !selectedFile.type.startsWith("image/") &&
      !selectedFile.type.startsWith("video/")
    ) {
      toast.error("Please select a valid image or video file.");
      setFile(null); // Clear the file if invalid
      return;
    }

    // Optional:  File size validation (example: limit to 5MB)
    const maxSize = 5 * 1024 * 1024; // 5MB in bytes
    if (selectedFile.size > maxSize) {
      toast.error("File size exceeds the limit (5MB).");
      setFile(null);
      return;
    }
    setFile(selectedFile);
  }
};

// --- Form Submission ---
const handleSubmit = async (e) => {
  e.preventDefault();
  setUpdating(true);

  try {
    const token = getToken()
    
    // Set proper headers
    const headers = {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    };

    // Prepare request body
    const requestBody = {
      ...formData,
      ...(existingMedia && { media: existingMedia }),
      tool: formData.tool === "other" ? formData.otherTool : formData.tool,
      options: Object.entries(formData.options).reduce((acc, [key, value]) => {
        acc[key] = value;
        return acc;
      }, {})
    };

    // Make the API call
    const response = await fetch(`${BASE_URL}/api/v1/questions/${params.id}`, {
      method: 'PUT',
      headers: headers,
      body: JSON.stringify(requestBody)
    });

    const data = await response.json();
    console.log("this is ata ",data)

    if (!response.status === 200) {
      console.log('reachine here 1 ',data);
      throw new Error(data.message || 'Failed to update question');
    }

    if (response.status ==200) {
      console.log('reachine here 2 ',data);
      toast.success('Question updated successfully');
      router.push('/manage-questions');
    } else {
      throw new Error(data.message || 'Failed to update question');
    }

  } catch (error) {
    console.error('Update error:', error);
    toast.error(error.message || 'Failed to update question');
  } finally {
    setUpdating(false);
  }
};
if (loading) {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="50vh"
    >
      <CircularProgress />
    </Box>
  );
}

return (
  <Box
    sx={{ maxWidth: "lg", mx: "auto", p: 3, bgcolor: "background.default" }}
  >
    <Button
      startIcon={<ArrowBackIcon />}
      onClick={() => router.push("/manage-questions")}
      sx={{ mb: 2 }}
    >
      Back to Manage Questions
    </Button>
    <Typography
      variant="h4"
      component="h1"
      gutterBottom
      sx={{ fontWeight: "bold", color: "text.primary" }}
    >
      Edit Question
    </Typography>
    <div>
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-medium">Question Image</h3>
          <div className="flex items-center gap-2">
            <input
              type="file"
              id="fileUpdate"
              className="hidden"
              onChange={(e) => handleFileUpdate(e.target.files[0])}
              accept="image/*"
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

        {showUrlInput && (
          <div className="flex items-center gap-2">
            <input
              type="url"
              value={newMediaUrl}
              onChange={(e) => setNewMediaUrl(e.target.value)}
              placeholder="Enter image URL"
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
                setNewMediaUrl('');
              }}
              className="px-3 py-1.5 text-sm text-gray-600 hover:text-gray-800"
            >
              Cancel
            </button>
          </div>
        )}

        {existingMedia && (
          <div className="mt-2 mb-5">
            <img
              src={existingMedia.url}
              alt="Question"
              className="max-w-md rounded shadow-sm"
            />
          </div>
        )}
      </div>
    </div>
    <form onSubmit={handleSubmit}>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
          gap: 2,
        }}
      >
        {/* Question */}
        <TextField
          label="Question *"
          name="question"
          value={formData.question}
          onChange={handleInputChange}
          required
          fullWidth
          variant="outlined"
          multiline
          rows={3}
        />

        {/* Options */}
        <Box sx={{ gridColumn: { xs: "span 1", sm: "span 2" } }}>
          <Typography variant="subtitle1" gutterBottom>
            Options *
          </Typography>
          {Object.entries(formData.options).map(([key, value]) => (
            <Box
              key={key}
              sx={{ display: "flex", alignItems: "center", mb: 1 }}
            >
              <Typography sx={{ width: "2em", fontWeight: "bold" }}>
                {key}:
              </Typography>
              <TextField
                value={value}
                onChange={(e) => handleOptionChange(key, e.target.value)}
                fullWidth
                variant="outlined"
                size="small"
                required
              />
              {Object.keys(formData.options).length > 2 && (
                <IconButton
                  onClick={() => removeOption(key)}
                  color="error"
                  size="small"
                >
                  <DeleteIcon />
                </IconButton>
              )}
            </Box>
          ))}
          {Object.keys(formData.options).length < 5 && (
            <Button
              type="button"
              onClick={addOption}
              startIcon={<AddIcon />}
              variant="outlined"
              color="primary"
              sx={{ mt: 1 }}
            >
              Add Option
            </Button>
          )}
        </Box>

        {/* Answer */}
        <FormControl fullWidth variant="outlined" required>
          <InputLabel id="answer-label">Answer *</InputLabel>
          <Select
            labelId="answer-label"
            name="answer"
            value={formData.answer}
            onChange={handleInputChange}
            label="Answer *"
          >
            <MenuItem value="">Select answer</MenuItem>
            {Object.keys(formData.options).map((key) => (
              <MenuItem key={key} value={key}>
                {key}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {/* Explanation */}
        <TextField
          label="Explanation *"
          name="explanation"
          value={formData.explanation}
          onChange={handleInputChange}
          required
          fullWidth
          variant="outlined"
          multiline
          rows={3}
        />

        {/* Exam */}
        <FormControl fullWidth variant="outlined" required>
          <InputLabel id="exam-label">Exam *</InputLabel>
          <Select
            labelId="exam-label"
            name="exam"
            value={formData.exam}
            onChange={handleInputChange}
            label="Exam *"
          >
            <MenuItem value="">Select Exam</MenuItem>
            {EXAM_OPTIONS.map((exam) => (
              <MenuItem key={exam} value={exam}>
                {exam}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {/* Subject */}
        <FormControl fullWidth variant="outlined" required>
          <InputLabel id="subject-label">Subject *</InputLabel>
          <Select
            labelId="subject-label"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            label="Subject *"
          >
            <MenuItem value="">Select Subject</MenuItem>
            {MEDICAL_SUBJECTS.map((subject) => (
              <MenuItem key={subject} value={subject}>
                {subject}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {/* Tool */}
        <FormControl fullWidth variant="outlined" required>
          <InputLabel id="tool-label">Tool *</InputLabel>
          <Select
            labelId="tool-label"
            name="tool"
            value={formData.tool}
            onChange={(e) => {
              const value = e.target.value;
              setToolType(value);
              if (value !== "other") {
                setFormData((prev) => ({
                  ...prev,
                  tool: value,
                }));
              } else {
                setFormData((prev) => ({
                  ...prev,
                  tool: "",
                }));
              }
            }}
            label="Tool *"
          >
            {TOOL_OPTIONS.map((option) => (
              <MenuItem key={option} value={option}>
                {option === "other"
                  ? "Other"
                  : option.charAt(0).toUpperCase() + option.slice(1)}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        {/* Display text field only when 'Other' is selected */}
        {formData.tool === "other" && (
          <TextField
            label="Specify Tool"
            name="tool"
            value={formData.tool === "other" ? formData.otherTool : ""}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, otherTool: e.target.value }))
            }
            fullWidth
            variant="outlined"
          />
        )}

        {/* Code */}
        <TextField
          label="Code *"
          name="code"
          value={formData.code}
          onChange={handleInputChange}
          required
          fullWidth
          variant="outlined"
        />

        {/* Difficulty */}
        <FormControl fullWidth variant="outlined">
          <InputLabel id="difficulty-label">Difficulty</InputLabel>
          <Select
            labelId="difficulty-label"
            name="difficulty"
            value={formData.difficulty}
            onChange={handleInputChange}
            label="Difficulty"
          >
            {DIFFICULTY_LEVELS.map((level) => (
              <MenuItem key={level} value={level}>
                {level}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {/* Tags */}
        <TextField
          label="Tags (comma separated)"
          name="tags"
          value={formData.tags.join(", ")}
          onChange={(e) => {
            const tagsArray = e.target.value
              .split(",")
              .map((tag) => tag.trim())
              .filter(Boolean); // Remove empty strings
            setFormData((prev) => ({ ...prev, tags: tagsArray }));
          }}
          fullWidth
          variant="outlined"
          helperText="Enter tags separated by commas"
        />
        {/* Media Upload */}
     
      </Box>

      <Button
        type="submit"
        variant="contained"
        color="primary"
        disabled={updating}
        sx={{ mt: 2, width: "100%" }}
      >
        {updating ? (
          <>
            <CircularProgress size={24} sx={{ mr: 1 }} />
            Updating...
          </>
        ) : (
          "Update Question"
        )}
      </Button>
    </form>
    <Toaster />
  </Box>
);

}