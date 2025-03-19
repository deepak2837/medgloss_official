"use client";
import { useState, useEffect, memo, useMemo } from "react";
import { useRouter } from "next/navigation";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { toast, Toaster } from "react-hot-toast";
import { RestartAlt as RestartAltIcon } from '@mui/icons-material';



import {
  Card,
  CardContent,
  Typography,
  Button,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Box,
  CircularProgress,
  Chip,
  IconButton,
  Tooltip,
} from "@mui/material";
import {
  ArrowBack as ArrowBackIcon,
  Info as InfoIcon,
  PlayCircleOutline as PlayCircleOutlineIcon,
  Image as ImageIcon,
} from "@mui/icons-material";
import useAuthStore from "@/store/authStore";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const StatisticsModal = ({ questions }) => {
  const [hoverSubject, setHoverSubject] = useState(null);

  // Group questions by subject
  const subjectStats = questions?.reduce((acc, q) => {
    acc[q.subject] = acc[q.subject] || { count: 0, questions: [] };
    acc[q.subject].count += 1;
    acc[q.subject].questions.push(q.question);
    return acc;
  }, {});

  return (
    <Card variant="outlined" sx={{ mb: 3 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Question Statistics
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {Object.entries(subjectStats || {}).map(([subject, data]) => (
            <Box
              key={subject}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                p: 2,
                borderRadius: 1,
                "&:hover": { bgcolor: "grey.100" },
                position: "relative", // Added for absolute positioning
              }}
              onMouseEnter={() => setHoverSubject(subject)}
              onMouseLeave={() => setHoverSubject(null)}
            >
              <Typography variant="body1" fontWeight="medium">
                {subject}
              </Typography>
              <Box sx={{ position: "relative" }}>
                <Chip
                  label={`${data.count} questions`}
                  color="primary"
                  size="small"
                />
                {hoverSubject === subject && (
                  <Box
                    sx={{
                      position: "absolute",
                      right: "100%", // Position to the left of the chip
                      top: "50%", // Center vertically
                      transform: "translateY(-50%)", // Adjust for vertical centering
                      bgcolor: "background.paper",
                      boxShadow: 2,
                      borderRadius: 1,
                      p: 2,
                      width: 300, // Wider box
                      zIndex: 10,
                      mr: 2, // Margin to separate from chip
                      maxHeight: "200px", // Limit the height
                      overflowY: "auto", // Enable scrolling
                    }}
                  >
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="div"
                    >
                      {/* Changed to div for correct rendering */}
                      {data.questions.map((q, i) => (
                        <div
                          key={i}
                          className="text-sm text-gray-600 whitespace-normal"
                        >
                          {q}
                        </div> // Added whitespace-normal
                      ))}
                    </Typography>
                  </Box>
                )}
              </Box>
            </Box>
          ))}
          <Box sx={{ pt: 2, borderTop: 1, borderColor: "divider" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                fontWeight: "bold",
              }}
            >
              <Typography variant="body1">Total Questions</Typography>
              <Typography variant="body1">{questions?.length || 0}</Typography>
            </Box>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default function ViewQuestionBank({ params }) {
  const [loading, setLoading] = useState(true);
  const [bankDetails, setBankDetails] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [selectedQuestions, setSelectedQuestions] = useState([]);

  const [filters, setFilters] = useState({
    subject: "all",
    difficulty: "all",
    exam: "all"
  });
  
  const {getToken} = useAuthStore();
  const [dynamicFilters, setDynamicFilters] = useState({
    subjects: [],
    exams: [],
    difficulties: [],
  });
  const [allQuestions, setAllQuestions] = useState([]);


  const [page, setPage] = useState(1); // Add page state
  const [pageSize, setPageSize] = useState(10); // Add pageSize state
  const [total, setTotal] = useState(0);

  const router = useRouter();
  const FilterSelect = memo(({ label, value, options, onChange }) => (
    <FormControl variant="outlined" size="small" fullWidth>
      <InputLabel id={`${label.toLowerCase()}-label`}>{label}</InputLabel>
      <Select
        labelId={`${label.toLowerCase()}-label`}
        value={value}
        onChange={onChange}
        label={label}
      >
        <MenuItem value="all">All {label}s</MenuItem>
        {options.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  ));
  FilterSelect.displayName = 'FilterSelect';
  const resetFilters = () => {
    setSearchText("");
    setFilters({
      subject: "all",
      difficulty: "all",
      exam: "all"
    });
  };
  useEffect(() => {
    const fetchFilters = async () => {
      try {
        const response = await fetch(
          `${BASE_URL}/api/v1/question-bank/filter-questions/${params.id}`,
          {
            headers: {
              Authorization: `Bearer ${getToken()}`,
            },
          }
        );
        const data = await response.json();
        if (data.success) {
          setDynamicFilters({
            subjects: [...new Set(data.data.subjects)],
            exams: [...new Set(data.data.exams)],
            difficulties: [...new Set(data.data.difficulties)],
          });
        }
      } catch (error) {
        console.error("Error fetching filters:", error);
      }
    };
    fetchFilters();
  }, [params.id]);
// Add auth check hook at the top
useEffect(() => {
  if (questions.length > 0) {
    setDynamicFilters({
      subjects: [...new Set(questions.map(q => q.subject))],
      exams: [...new Set(questions.map(q => q.exam))],
      difficulties: [...new Set(questions.map(q => q.difficulty))]
    });
  }
}, [questions]);
const filteredQuestions = useMemo(() => {
  return questions.filter(question => {
    const matchesSearch = searchText.trim() === "" || 
      question.question.toLowerCase().includes(searchText.toLowerCase());
    const matchesSubject = filters.subject === "all" || 
      question.subject === filters.subject;
    const matchesDifficulty = filters.difficulty === "all" || 
      question.difficulty === filters.difficulty;
    const matchesExam = filters.exam === "all" || 
      question.exam === filters.exam;
    
    return matchesSearch && matchesSubject && matchesDifficulty && matchesExam;
  });
}, [questions, searchText, filters]);
useEffect(() => {
  const token = getToken()
  if (!token) {
    toast.error('Please login to continue');
    router.push('/login');
    return;
  }
}, []);
  useEffect(() => {
    const fetchBankDetails = async (
      page = 1,
      limit = 10,
      search = "",
      subject = "all",
      difficulty = "all",
      exam = "all"
    ) => {
      try {
        const token = getToken();
        // Build the URL with query parameters
        const url = new URL(
          `${BASE_URL}/api/v1/question-bank/view/${params.id}`
        );
        url.searchParams.append("page", page);
        url.searchParams.append("limit", limit);
        url.searchParams.append("search", search);
        url.searchParams.append("subject", subject);
        url.searchParams.append("difficulty", difficulty);
        url.searchParams.append("exam", exam);

        const response = await fetch(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json();
        if (data.success) {
          setBankDetails(data.data);
          setQuestions(data.data.questions || []);
          setTotal(data.total);
          // Set dynamic filters.  Use a Set to avoid duplicates.
          if (data.data.questions?.length > 0) {
            const subjectsSet = new Set(
              data.data.questions.map((q) => q.subject).filter(Boolean)
            );
            const examsSet = new Set(
              data.data.questions.map((q) => q.exam).filter(Boolean)
            );
            const difficultiesSet = new Set(
              data.data.questions.map((q) => q.difficulty).filter(Boolean)
            );

            setDynamicFilters({
              subjects: Array.from(subjectsSet),
              exams: Array.from(examsSet),
              difficulties: Array.from(difficultiesSet),
            });
          }
        } else {
          toast.error(data.message || "Failed to fetch question bank details.");
        }
        setLoading(false);
      } catch (error) {
        toast.error("Error fetching bank details: " + error.message);
        setLoading(false); // Ensure loading is set to false even on error
      }
    };
    fetchBankDetails(
      page,
      pageSize,
      searchText,
      filters.subject,
      filters.difficulty,
      filters.exam
    );
  }, [params.id, page, pageSize, searchText, filters]);

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
      field: "subject",
      headerName: "Subject",
      width: 150,
      renderCell: (params) => (
        <Typography variant="body2">{params.value}</Typography>
      ),
    },
    {
      field: "difficulty",
      headerName: "Difficulty",
      width: 120,
      renderCell: (params) => (
        <Typography variant="body2">{params.value}</Typography>
      ),
    },
    {
      field: "exam",
      headerName: "Exam",
      width: 150,
      renderCell: (params) => (
        <Typography variant="body2">{params.value}</Typography>
      ),
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 100,
      sortable: false,
      renderCell: (params) => (
        <Tooltip title="View Details">
          <IconButton
            aria-label="view details"
            onClick={() => {
              /* Handle view details action */
            }}
            color="primary"
            size="small"
          >
            <InfoIcon />
          </IconButton>
        </Tooltip>
      ),
    },
  ];
  const filteredData = useMemo(() => {
    return questions.filter(question => {
      const matchesSubject = filters.subject === 'all' || question.subject === filters.subject;
      const matchesDifficulty = filters.difficulty === 'all' || question.difficulty === filters.difficulty;
      const matchesExam = filters.exam === 'all' || question.exam === filters.exam;
      return matchesSubject && matchesDifficulty && matchesExam;
    });
  }, [questions, filters]);
  const handleFilterChange = (filterName, value) => {
    setFilters(prev => ({
      ...prev,
      [filterName]: value
    }));
  };
  
  const rows = questions.map((question) => ({
    id: question._id,
    _id: question._id, // Keep the original ID
    ...question,
  }));

  if (loading) {
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

  return (
    <Box sx={{ p: 3, bgcolor: "background.default", minHeight: "100vh" }}>
      <Button
        startIcon={<ArrowBackIcon />}
        onClick={() => router.push("/manage-question-bank")}
        sx={{ mb: 2 }}
      >
        Back to Question Banks
      </Button>

      {/* Bank Details Card */}
      <Card variant="outlined" sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="h5" component="div" gutterBottom>
            Question Bank Details
          </Typography>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: 2,
            }}
          >
            <Typography variant="body1">
              <Typography component="span" fontWeight="medium">
                Name:{" "}
              </Typography>
              {bankDetails?.name}
            </Typography>
            <Typography variant="body1">
              <Typography component="span" fontWeight="medium">
                Title:{" "}
              </Typography>{" "}
              {bankDetails?.title}
            </Typography>
            <Typography variant="body1">
              <Typography component="span" fontWeight="medium">
                Type:{" "}
              </Typography>{" "}
              {bankDetails?.type
                ? bankDetails.type.charAt(0).toUpperCase() +
                  bankDetails.type.slice(1)
                : ""}
            </Typography>
            <Typography variant="body1">
              <Typography component="span" fontWeight="medium">
                Category:{" "}
              </Typography>
              {bankDetails?.category}
            </Typography>
            <Typography variant="body1">
              <Typography component="span" fontWeight="medium">
                Target Audience:{" "}
              </Typography>
              {bankDetails?.for?.join(", ")}
            </Typography>
            <Typography variant="body1">
              <Typography component="span" fontWeight="medium">
                Tags:{" "}
              </Typography>{" "}
              {bankDetails?.tags?.join(", ")}
            </Typography>
            <Typography variant="body1">
              <Typography component="span" fontWeight="medium">
                Status:{" "}
              </Typography>
              {bankDetails?.status
                ? bankDetails.status.charAt(0).toUpperCase() +
                  bankDetails.status.slice(1)
                : ""}
            </Typography>
          </Box>
        </CardContent>
      </Card>

      {/* Media Preview */}
      {(bankDetails?.image || bankDetails?.video) && (
        <Card variant="outlined" sx={{ mb: 3 }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Media
            </Typography>
            {bankDetails.image ? (
              <img
                src={bankDetails.image}
                alt="Question Bank"
                style={{ maxWidth: "100%", borderRadius: "4px" }}
              />
            ) : (
              <video
                src={bankDetails.video}
                controls
                style={{ maxWidth: "100%", borderRadius: "4px" }}
              />
            )}
          </CardContent>
        </Card>
      )}

      {/* Statistics Card */}
      <StatisticsModal questions={questions} />

      {/* Filters */}
      <div className="bg-white rounded-xl shadow-md p-6 mb-6">
  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
    <TextField
      label="Search questions..."
      variant="outlined"
      value={searchText}
      onChange={(e) => setSearchText(e.target.value)}
      fullWidth
      size="small"
    />

    <FormControl fullWidth size="small">
      <InputLabel>Subject</InputLabel>
      <Select
        value={filters.subject}
        label="Subject"
        onChange={(e) => setFilters(prev => ({...prev, subject: e.target.value}))}
      >
        <MenuItem value="all">All Subjects</MenuItem>
        {dynamicFilters.subjects.map(subject => (
          <MenuItem key={subject} value={subject}>{subject}</MenuItem>
        ))}
      </Select>
    </FormControl>

    <FormControl fullWidth size="small">
      <InputLabel>Difficulty</InputLabel>
      <Select
        value={filters.difficulty}
        label="Difficulty"
        onChange={(e) => setFilters(prev => ({...prev, difficulty: e.target.value}))}
      >
        <MenuItem value="all">All Difficulties</MenuItem>
        {dynamicFilters.difficulties.map(difficulty => (
          <MenuItem key={difficulty} value={difficulty}>{difficulty}</MenuItem>
        ))}
      </Select>
    </FormControl>

    <FormControl fullWidth size="small">
      <InputLabel>Exam</InputLabel>
      <Select
        value={filters.exam}
        label="Exam"
        onChange={(e) => setFilters(prev => ({...prev, exam: e.target.value}))}
      >
        <MenuItem value="all">All Exams</MenuItem>
        {dynamicFilters.exams.map(exam => (
          <MenuItem key={exam} value={exam}>{exam}</MenuItem>
        ))}
      </Select>
    </FormControl>
  </div>

  <Button
    onClick={resetFilters}
    startIcon={<RestartAltIcon />}
    sx={{ mt: 2 }}
  >
    Reset Filters
  </Button>
</div>
      {/* Questions Table */}
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Questions
          </Typography>
          <DataGrid
  rows={filteredQuestions}
  columns={columns}
  getRowId={(row) => row._id}
  pageSize={pageSize}
  rowsPerPageOptions={[10, 25, 50, 100]}
  checkboxSelection
  onSelectionModelChange={(newSelection) => {
    setSelectedQuestions(newSelection);
  }}
  selectionModel={selectedQuestions}
  components={{
    Toolbar: GridToolbar,
  }}
  autoHeight
            sx={{
              ".MuiDataGrid-cell": {
                borderBottom: "1px solid #e0e0e0",
              },
              ".MuiDataGrid-columnHeader": {
                backgroundColor: "grey.100",
                fontWeight: "bold",
              },
              "& .MuiDataGrid-row": {
                // Style for the entire row
                "&:hover": {
                  backgroundColor: "#f5f5f5", // Lighter gray on hover
                },
              },
              "& .MuiDataGrid-toolbarContainer": {
                // Target the toolbar
                backgroundColor: "#f8f8f8",
                borderBottom: "1px solid #ddd",
                padding: "8px",
              },
              "& .MuiDataGrid-footerContainer": {
                // Custom styles for the footer
                borderTop: "1px solid #ccc", // Add a border
                backgroundColor: "#f8f9fa", // Light gray background
              },
              "& .MuiTablePagination-root": {
                // For pagination controls
                color: "#333", // Darker text for better readability
              },
            }}
          />
        </CardContent>
      </Card>

      <Toaster />
    </Box>
  );
}
