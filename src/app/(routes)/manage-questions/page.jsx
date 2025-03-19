"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Link from "next/link";
import { toast, Toaster } from "react-hot-toast";
import {
  Box,
  Button,
  CircularProgress,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  IconButton,
} from "@mui/material";
import {
  Add as AddIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  Clear as ClearIcon,
  Search as SearchIcon,
} from "@mui/icons-material";
import useAuthStore from "@/store/authStore";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
// Constants (Consider moving these to a separate constants file if used elsewhere)
const DIFFICULTY_LEVELS = ["easy", "medium", "hard"];
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

export default function ManageQuestions() {
  const [allQuestions, setAllQuestions] = useState([]);
  const [filteredQuestions, setFilteredQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();
  const [page, setPage] = useState(0); // Changed to 0-based for DataGrid
  const [pageSize, setPageSize] = useState(10);
  const { getToken } = useAuthStore();
  
  const [dynamicFilters, setDynamicFilters] = useState({
    subjects: [],
    exams: [],
    difficulties: [],
    tools: [],
    statuses: []
  });
  
  const [searchText, setSearchText] = useState("");
  const [filters, setFilters] = useState({
    difficulty: "all",
    exam: "all",
    subject: "all",
    tool: "all",
    status: "all"
  });

  const columns = [
    {
      field: "question",
      headerName: "Question",
      flex: 2,
      renderCell: (params) => (
        <Typography variant="body1" sx={{ whiteSpace: "normal" }}>
          {params.value}
        </Typography>
      ),
    },
    {
      field: "answer",
      headerName: "Answer",
      width: 100,
      renderCell: (params) => (
        <Typography variant="body1">{params.value}</Typography>
      ),
    },
    {
      field: "explanation",
      headerName: "Explanation",
      flex: 2,
      renderCell: (params) => (
        <Typography variant="body1" sx={{ whiteSpace: "normal" }}>
          {params.value}
        </Typography>
      ),
    },
    {
      field: "subject",
      headerName: "Subject",
      width: 150,
      type: "singleSelect",
      valueOptions: dynamicFilters.subjects,
      renderCell: (params) => (
        <Typography variant="body1">{params.value}</Typography>
      ),
    },
    {
      field: "exam",
      headerName: "Exam",
      width: 150,
      type: "singleSelect",
      valueOptions: dynamicFilters.exams,
      renderCell: (params) => (
        <Typography variant="body1">{params.value}</Typography>
      ),
    },
    {
      field: "difficulty",
      headerName: "Difficulty",
      width: 120,
      type: "singleSelect",
      valueOptions: dynamicFilters.difficulties,
      renderCell: (params) => (
        <Typography variant="body1">{params.value}</Typography>
      ),
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 150,
      renderCell: (params) => (
        <Box sx={{ display: "flex", gap: 1 }}>
          <IconButton
            aria-label="edit"
            component={Link}
            href={`/manage-questions/edit-question/${params.row._id}`}
            color="warning"
          >
            <EditIcon />
          </IconButton>
          <IconButton
            aria-label="delete"
            onClick={() => handleDelete(params.row._id)}
            color="error"
          >
            <DeleteIcon />
          </IconButton>
        </Box>
      ),
    },
  ];

  // Initial fetch - only load data once
  useEffect(() => {
    fetchAllQuestions();
  }, []);

  // Apply filters whenever filter state changes
  useEffect(() => {
    applyFilters();
  }, [allQuestions, searchText, filters]);

  const fetchAllQuestions = async () => {
    try {
      setLoading(true);
      const token = getToken();
      
      // Fetch all questions at once (adjust limit if needed)
      const url = new URL(`${BASE_URL}/api/v1/questions`);
      url.searchParams.append("limit", "1000"); // Get more records at once
      
      const response = await fetch(url, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
      });

      if (!response.ok) {
        if (response.status === 401) {
          toast.error("Session expired. Please login again");
          router.push('/login');
          return;
        }
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (data.success) {
        const questions = data.data;
        setAllQuestions(questions);
        
        // Update dynamic filters with all possible values
        setDynamicFilters({
          subjects: [...new Set(questions.map((q) => q.subject).filter(Boolean))],
          exams: [...new Set(questions.map((q) => q.exam).filter(Boolean))],
          difficulties: [...new Set(questions.map((q) => q.difficulty).filter(Boolean))],
          tools: [...new Set(questions.map((q) => q.tool).filter(Boolean))],
          statuses: [...new Set(questions.map((q) => q.status).filter(Boolean))]
        });
        
        // Initialize filtered questions with all questions
        setFilteredQuestions(questions);
      } else {
        throw new Error(data.message || 'Failed to fetch questions');
      }
    } catch (error) {
      setError(error.message);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Apply client-side filtering
  const applyFilters = () => {
    if (!allQuestions.length) return;
    
    let result = [...allQuestions];
    
    // Apply search text filter
    if (searchText) {
      const searchLower = searchText.toLowerCase();
      result = result.filter(question => 
        question.question?.toLowerCase().includes(searchLower) || 
        question.answer?.toLowerCase().includes(searchLower) ||
        question.explanation?.toLowerCase().includes(searchLower)
      );
    }
    
    // Apply dropdown filters
    if (filters.subject !== "all") {
      result = result.filter(q => q.subject === filters.subject);
    }
    
    if (filters.difficulty !== "all") {
      result = result.filter(q => q.difficulty === filters.difficulty);
    }
    
    if (filters.exam !== "all") {
      result = result.filter(q => q.exam === filters.exam);
    }
    
    if (filters.tool !== "all") {
      result = result.filter(q => q.tool === filters.tool);
    }
    
    if (filters.status !== "all") {
      result = result.filter(q => q.status === filters.status);
    }
    
    setFilteredQuestions(result);
    setPage(0); // Reset to first page when filters change
  };

  const handleDelete = async (questionId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this question?"
    );
    if (!confirmDelete) return;
    
    try {
      const token = getToken();
      const response = await fetch(
        `${BASE_URL}/api/v1/questions/${questionId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
  
      if (response.status === 401) {
        toast.error("Session expired. Please login again");
        router.push('/login');
        return;
      }
  
      if (response.ok) {
        toast.success("Question deleted successfully");
        // Update local state after deletion
        const updatedQuestions = allQuestions.filter(q => q._id !== questionId);
        setAllQuestions(updatedQuestions);
        // Filtered questions will be updated via the useEffect
      } else {
        const errorData = await response.json();
        toast.error(
          `Error deleting question: ${errorData.message || "Unknown error"}`
        );
      }
    } catch (error) {
      toast.error("Error deleting question: " + error.message);
      
      if (error.response?.status === 401) {
        toast.error("Session expired. Please login again");
        router.push('/login');
      }
    }
  };

  // Prepare rows for DataGrid
  const rows = filteredQuestions.map((question) => ({
    id: question._id,
    _id: question._id,
    ...question,
  }));

  if (loading && !rows.length) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="50vh"
      >
        <CircularProgress />
      </Box>
    );
  }
  
  if (error && !rows.length) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="50vh"
        color="error.main"
      >
        {error}
      </Box>
    );
  }

  return (
    <Box sx={{ p: 3, bgcolor: "background.default", minHeight: "100vh" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 3,
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          sx={{ fontWeight: "bold", color: "text.primary" }}
        >
          Manage Questions
        </Typography>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          href="/manage-questions/add-question"
          startIcon={<AddIcon />}
        >
          Add Question
        </Button>
      </Box>

      <Box
        sx={{ bgcolor: "white", borderRadius: 2, boxShadow: 1, p: 2, mb: 3 }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "1fr 1fr",
              md: "1fr 1fr 1fr 1fr",
            },
            gap: 2,
          }}
        >
          <TextField
            label="Search questions..."
            variant="outlined"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            fullWidth
            size="small"
            InputProps={{
              startAdornment: (
                <IconButton size="small">
                  <SearchIcon />
                </IconButton>
              ),
            }}
          />

          <FormControl variant="outlined" size="small" fullWidth>
            <InputLabel id="subject-label">Subject</InputLabel>
            <Select
              labelId="subject-label"
              value={filters.subject}
              onChange={(e) => setFilters((prev) => ({ ...prev, subject: e.target.value }))}
              label="Subject"
            >
              <MenuItem value="all">All Subjects</MenuItem>
              {dynamicFilters.subjects.map((subject) => (
                <MenuItem key={subject} value={subject}>
                  {subject}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl variant="outlined" size="small" fullWidth>
            <InputLabel id="exam-label">Exam</InputLabel>
            <Select
              labelId="exam-label"
              value={filters.exam}
              onChange={(e) => setFilters((prev) => ({ ...prev, exam: e.target.value }))}
              label="Exam"
            >
              <MenuItem value="all">All Exams</MenuItem>
              {dynamicFilters.exams.map((exam) => (
                <MenuItem key={exam} value={exam}>
                  {exam}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl variant="outlined" size="small" fullWidth>
            <InputLabel id="difficulty-label">Difficulty</InputLabel>
            <Select
              labelId="difficulty-label"
              value={filters.difficulty}
              onChange={(e) => setFilters((prev) => ({ ...prev, difficulty: e.target.value }))}
              label="Difficulty"
            >
              <MenuItem value="all">All Difficulties</MenuItem>
              {dynamicFilters.difficulties.map((difficulty) => (
                <MenuItem key={difficulty} value={difficulty}>
                  {difficulty}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl variant="outlined" size="small" fullWidth>
            <InputLabel id="status-label">Status</InputLabel>
            <Select
              labelId="status-label"
              value={filters.status}
              onChange={(e) => setFilters((prev) => ({ ...prev, status: e.target.value }))}
              label="Status"
            >
              <MenuItem value="all">All Status</MenuItem>
              {dynamicFilters.statuses?.map((status) => (
                <MenuItem key={status} value={status}>
                  {status.charAt(0).toUpperCase() + status.slice(1)}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl variant="outlined" size="small" fullWidth>
            <InputLabel id="tool-label">Tool</InputLabel>
            <Select
              labelId="tool-label"
              value={filters.tool}
              onChange={(e) => setFilters((prev) => ({ ...prev, tool: e.target.value }))}
              label="Tool"
            >
              <MenuItem value="all">All Tools</MenuItem>
              {dynamicFilters.tools.map((tool) => (
                <MenuItem key={tool} value={tool}>
                  {tool}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ mt: 2, display: "flex", justifyContent: "flex-end" }}>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => {
              setSearchText("");
              setFilters({
                difficulty: "all",
                exam: "all",
                subject: "all",
                tool: "all",
                status: "all"
              });
            }}
            startIcon={<ClearIcon />}
          >
            Reset Filters
          </Button>
        </Box>
      </Box>

      <Box
        sx={{
          bgcolor: "white",
          borderRadius: 2,
          boxShadow: 1,
          overflow: "hidden",
        }}
      >
        <DataGrid
          rows={rows}
          columns={columns}
          page={page}
          pageSize={pageSize}
          rowCount={filteredQuestions.length}
          paginationMode="client"
          onPageChange={(newPage) => setPage(newPage)}
          onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
          rowsPerPageOptions={[10, 25, 50, 100]}
          disableSelectionOnClick
          loading={loading}
          components={{
            Toolbar: GridToolbar,
          }}
          autoHeight
          sx={{
            "& .MuiDataGrid-columnHeader": {
              backgroundColor: "grey.100",
              fontWeight: "bold",
              borderBottom: "1px solid #ccc",
            },
            "& .MuiDataGrid-row": {
              "&:hover": {
                backgroundColor: "grey.50",
              },
            },
            "& .MuiDataGrid-cell": {
              borderBottom: "1px solid #e0e0e0",
            },
            "& .MuiDataGrid-toolbarContainer": {
              backgroundColor: "grey.50",
              borderBottom: "1px solid #ddd",
              padding: 2,
            },
            "& .MuiDataGrid-footerContainer": {
              borderTop: "1px solid #ccc",
              backgroundColor: "grey.50",
            },
            "& .MuiTablePagination-root": {
              color: "text.primary",
            },
          }}
        />
      </Box>
      <Toaster />
    </Box>
  );
}