"use client";
import { useState } from "react";
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
} from "@mui/icons-material";
import useAuthStore from "@/store/authStore";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

// Constants (moved to top level for better organization)
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
const TOOL_OPTIONS = ["manual", "script", "other"];
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
const DIFFICULTY_LEVELS = ["easy", "medium", "hard"];
const STATUS_OPTIONS = ["active", "inactive", "draft"]; // Not currently used, but good to keep

export default function AddQuestion() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [toolType, setToolType] = useState("manual"); //Consider removing, it's redundant
  const [uploadType, setUploadType] = useState("file");
  const [file, setFile] = useState(null);
  const [mediaUrl, setMediaUrl] = useState("");
  const {getToken} = useAuthStore();
  const [formData, setFormData] = useState({
    question: "",
    options: { a: "", b: "" },
    answer: "",
    explanation: "",
    exam: "",
    subject: "",
    tool: "manual", // Default to manual
    code: "",
    difficulty: "easy", // Default difficulty
    tags: [],
    status: "active", // Default status (though not used in UI)
  });

  // --- Input Change Handlers ---

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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
      answer: prev.answer === keyToRemove ? "" : prev.answer, // Clear answer if removed option was the answer
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
    console.log('tfdytfc',formData)
    e.preventDefault();
    setLoading(true);

    if (!formData.question.trim()) {
      toast.error("Question is required");
      setLoading(false);
      return;
    }
    if (!formData.answer) {
      toast.error("Answer is required");
      setLoading(false);
      return;
    }
    if (!formData.explanation.trim()) {
      toast.error("Explanation is required");
      setLoading(false);
      return;
    }
    if (!formData.exam) {
      toast.error("Exam is required");
      setLoading(false);
      return;
    }
    if (!formData.subject) {
      toast.error("Subject is required");
      setLoading(false);
      return;
    }
    if (!formData.tool) {
      toast.error("Tool is required");
      setLoading(false);
      return;
    }
    if (!formData.code.trim()) {
      toast.error("Code is required");
      setLoading(false);
      return;
    }
  
    if (uploadType === "url" && !mediaUrl.trim()) {
      toast.error("Please enter a media URL.");
      setLoading(false);
      return;
    }

    try {
      // Validate required fields
      const requiredFields = ['question', 'explanation', 'exam', 'subject', 'tool', 'code', 'answer'];
      const missingFields = requiredFields.filter(field => !formData[field]);
       
      if (missingFields.length > 0) {
        toast.error(`Please fill in: ${missingFields.join(', ')}`);
        setLoading(false);
        return;
      }
  
      const formDataToSend = new FormData();
  
      // Append all required fields
      Object.keys(formData).forEach(key => {
        if (key === 'options') {
          formDataToSend.append(key, JSON.stringify(formData[key]));
        } else {
          formDataToSend.append(key, formData[key]);
        }
      });
  
      // Only append image if one is provided
      if (uploadType === 'file' && file) {
        formDataToSend.append('image', file);
      } else if (uploadType === 'url' && mediaUrl.trim()) {
        formDataToSend.append('imageUrl', mediaUrl.trim());
      }
      // If no image is provided, continue without image field
  
      const token = getToken()
      const response = await fetch(`${BASE_URL}/api/v1/questions`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`
        },
        body: formDataToSend
      });

      if (!response.ok) {
        const errorData = await response.json(); // Get detailed error from API
        throw new Error(errorData.message || `HTTP error ${response.status}`);
      }

      const data = await response.json();
      if (data.success) {
        toast.success("Question added successfully!");
        router.push("/manage-questions");
      } else {
        toast.error(data.message || "Failed to add question");
      }
    } catch (error) {
      toast.error("Error adding question: " + error.message);
    } finally {
      setLoading(false);
    }
  };
  const handleToolChange = (e) => {
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
  };
  return (
    <Box
      sx={{ maxWidth: "lg", mx: "auto", p: 3, bgcolor: "background.default" }}
    >
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        sx={{ fontWeight: "bold", color: "text.primary" }}
      >
        Add New Question
      </Typography>

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
            rows={3} // Adjust as needed
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
                setFormData((prev) => ({ ...prev, tool: e.target.value }));
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
          <Box sx={{ gridColumn: { xs: "span 1", sm: "span 2" } }}>
            <Typography variant="subtitle1" gutterBottom>
              Media Upload *
            </Typography>
            <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
              <Button
                variant={uploadType === "file" ? "contained" : "outlined"}
                color="primary"
                onClick={() => {
                  setUploadType("file");
                  setMediaUrl("");
                }}
                startIcon={<CloudUploadIcon />}
              >
                Upload File
              </Button>
              <Button
                variant={uploadType === "url" ? "contained" : "outlined"}
                color="primary"
                onClick={() => {
                  setUploadType("url");
                  setFile(null);
                }}
                startIcon={<LinkIcon />}
              >
                Provide URL
              </Button>
            </Box>

            {uploadType === "file" ? (
              <input
                type="file"
                accept="image/*,video/*"
                onChange={handleFileChange}
                style={{ display: "none" }} // Hide the default input
                id="file-upload" // Add an ID for the label
               
              />
            ) : (
              <TextField
                label="Media URL (image or video)"
                value={mediaUrl}
                onChange={(e) => setMediaUrl(e.target.value)}
                fullWidth
                variant="outlined"
               
              />
            )}
            {/* Label for the file upload (custom styled) */}
            {uploadType === "file" && (
              <label htmlFor="file-upload">
                <Button
                  variant="contained"
                  component="span"
                  startIcon={<CloudUploadIcon />}
                  sx={{ mt: 1 }}
                >
                  Choose File
                </Button>
                {file && (
                  <Typography variant="body2" sx={{ mt: 1 }}>
                    Selected: {file.name}
                  </Typography>
                )}
              </label>
            )}
          </Box>
        </Box>

        <Button
          type="submit"
          variant="contained"
          color="primary"
          isabled={loading}
          sx={{ mt: 2, width: "100%" }} // Add margin top and full width
        >
          {loading ? (
            <>
              <CircularProgress size={24} sx={{ mr: 1 }} />
              Adding...
            </>
          ) : (
            "Add Question"
          )}
        </Button>
      </form>
      <Toaster />
    </Box>
  );
}
