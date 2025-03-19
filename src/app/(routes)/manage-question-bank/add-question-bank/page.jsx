"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast, Toaster } from "react-hot-toast";
import {
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  CircularProgress,
  Box,
  Typography,
  FormHelperText,
} from "@mui/material";
import { CloudUpload as CloudUploadIcon } from "@mui/icons-material";
import useAuthStore from "@/store/authStore";

export default function AddQuestionBank() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [uploadType, setUploadType] = useState("file");
  const [mediaUrl, setMediaUrl] = useState("");
  const [file, setFile] = useState(null);
  const [formErrors, setFormErrors] = useState({}); // State for form validation errors
 const {getToken }= useAuthStore()
  const [formData, setFormData] = useState({
    name: "",
    title: "",
    type: "exam",
    category: "Medical",
    description: "",
    for: ["MBBS"],
    tags: ["anatomy"],
    status: "draft",
  });

  // Handle array field updates (using a cleaner approach with Set)
  const handleArrayFieldChange = (field, value) => {
    const values = value
      .split(",")
      .map((item) => item.trim())
      .filter((item) => item !== ""); // Remove empty strings

    setFormData((prev) => ({
      ...prev,
      [field]: Array.from(new Set(values)), // Use Set to remove duplicates
    }));
    // Clear specific error when input changes
    setFormErrors((prevErrors) => ({ ...prevErrors, [field]: undefined }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear specific error when input changes
    setFormErrors((prevErrors) => ({ ...prevErrors, [name]: undefined }));
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      file: undefined,
      mediaUrl: undefined,
    }));
  };

  const handleMediaUrlChange = (e) => {
    setMediaUrl(e.target.value);
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      mediaUrl: undefined,
      file: undefined,
    }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const errors = {};

    // Basic validation (required fields)
    if (!formData.name) errors.name = "Name is required";
    if (!formData.title) errors.title = "Title is required";
    if (!formData.type) errors.type = "Type is required";
    if (!formData.category) errors.category = "Category is required";
    if (formData.for.length === 0)
      errors.for = "At least one target audience is required";
    if (formData.tags.length === 0)
      errors.tags = "At least one tag is required";

    if (uploadType === "file" && !file) {
      errors.file = "Please select a file";
      errors.mediaUrl = undefined;
    }
    if (uploadType === "url" && !mediaUrl) {
      errors.mediaUrl = "Please provide a media URL";
      errors.file = undefined;
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      setLoading(false);
      return; // Stop submission if there are errors
    }

    try {
      const token = getToken()
      let requestBody;
      let headers = {
        Authorization: `Bearer ${token}`,
      };

      if (uploadType === "file" && file) {
        const formDataObj = new FormData();
        formDataObj.append("file", file);
        Object.keys(formData).forEach((key) => {
          if (Array.isArray(formData[key])) {
            formData[key].forEach((value) =>
              formDataObj.append(`${key}[]`, value)
            );
          } else {
            formDataObj.append(key, formData[key]);
          }
        });
        requestBody = formDataObj;
      } else if (uploadType === "url" && mediaUrl) {
        headers["Content-Type"] = "application/json";
        requestBody = JSON.stringify({
          ...formData,
          [mediaUrl.includes(".mp4") ? "videoUrl" : "imageUrl"]: mediaUrl,
        });
      }

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/question-bank/create`,
        {
          method: "POST",
          headers,
          body: requestBody,
        }
      );

      const data = await response.json();
      if (data.success) {
        toast.success("Question bank created successfully");
        router.push("/manage-question-bank");
      } else {
        // Handle API errors (e.g., validation errors from the server)
        if (data.errors) {
          // Assuming your API returns errors in an "errors" object
          setFormErrors(data.errors);
        } else {
          toast.error(data.message || "An unexpected error occurred.");
        }
      }
    } catch (error) {
      toast.error("Network error: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <form
        onSubmit={handleSubmit}
        className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-lg"
      >
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          className="text-gray-800"
        >
          Create Question Bank
        </Typography>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            required
            value={formData.name}
            onChange={handleInputChange}
            name="name"
            error={!!formErrors.name}
            helperText={formErrors.name}
          />

          <TextField
            label="Title"
            variant="outlined"
            fullWidth
            required
            value={formData.title}
            onChange={handleInputChange}
            name="title"
            error={!!formErrors.title}
            helperText={formErrors.title}
          />

          <FormControl fullWidth variant="outlined" error={!!formErrors.type}>
            <InputLabel id="type-label">Type</InputLabel>
            <Select
              labelId="type-label"
              value={formData.type}
              onChange={handleInputChange}
              label="Type"
              name="type"
              required
            >
              <MenuItem value="exam">Exam</MenuItem>
              <MenuItem value="subject">Subject</MenuItem>
              <MenuItem value="course">Course</MenuItem>
            </Select>
            {formErrors.type && (
              <FormHelperText>{formErrors.type}</FormHelperText>
            )}
          </FormControl>

          <TextField
            label="Category"
            variant="outlined"
            fullWidth
            required
            value={formData.category}
            onChange={handleInputChange}
            name="category"
            error={!!formErrors.category}
            helperText={formErrors.category}
          />

          <TextField
            label="Target Audience (comma-separated)"
            variant="outlined"
            fullWidth
            required
            value={formData.for.join(", ")}
            onChange={(e) => handleArrayFieldChange("for", e.target.value)}
            placeholder="MBBS, BDS, NURSING"
            name="for"
            error={!!formErrors.for}
            helperText={formErrors.for}
          />

          <TextField
            label="Tags (comma-separated)"
            variant="outlined"
            fullWidth
            required
            value={formData.tags.join(", ")}
            onChange={(e) => handleArrayFieldChange("tags", e.target.value)}
            placeholder="anatomy, physiology, medicine"
            name="tags"
            error={!!formErrors.tags}
            helperText={formErrors.tags}
          />
        </div>

        <Box mt={4}>
          <Typography variant="subtitle1" gutterBottom>
            Media Upload Method <span className="text-red-500">*</span>
          </Typography>
          <Box display="flex" gap={2} mb={2}>
            <Button
              variant={uploadType === "file" ? "contained" : "outlined"}
              color="primary"
              onClick={() => {
                setUploadType("file");
                setMediaUrl("");
              }}
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
            >
              Provide URL
            </Button>
          </Box>

          {uploadType === "file" ? (
            <TextField
              type="file"
              variant="outlined"
              fullWidth
              required
              onChange={handleFileChange}
              inputProps={{ accept: "image/*,video/*" }}
              error={!!formErrors.file}
              helperText={formErrors.file}
            />
          ) : (
            <TextField
              type="url"
              label="Media URL (image or video)"
              variant="outlined"
              fullWidth
              required
              value={mediaUrl}
              onChange={handleMediaUrlChange}
              error={!!formErrors.mediaUrl}
              helperText={formErrors.mediaUrl}
            />
          )}
        </Box>

        <Box mt={4}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="large"
            disabled={loading}
            startIcon={loading ? <CircularProgress size={20} /> : null}
            fullWidth
            sx={{ py: 1.5, borderRadius: "8px" }}
          >
            {loading ? "Creating..." : "Create Question Bank"}
          </Button>
        </Box>
      </form>
      <Toaster />
    </div>
  );
}
