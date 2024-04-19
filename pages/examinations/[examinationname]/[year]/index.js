import { useRouter } from 'next/router';

export default function SemesterPaperPage() {
  const router = useRouter();

  // Mock data (replace with your actual data)
  const universityData = [
    {
      "universityCode": "all-india-institute-of-medical-sciences-new-delhi",
      "courses": [
        {
          "courseName": "Medicine",
          "previousYearPapers": [
            {
              "year": 2023,
              "semester": "Fall",
              "pdfLink": "https://example.com/papers/medicine_2023_fall.pdf"
            },
            {
              "year": 2023,
              "semester": "Spring",
              "pdfLink": "https://example.com/papers/medicine_2023_spring.pdf"
            }
          ]
        },
        {
          "courseName": "Biology",
          "previousYearPapers": [
            {
              "year": 2022,
              "semester": "Fall",
              "pdfLink": "https://example.com/papers/biology_2022_fall.pdf"
            },
            {
              "year": 2021,
              "semester": "Spring",
              "pdfLink": "https://www.bahamasmaritime.com/wp-content/uploads/2023/05/YN004-Large-Private-Yachts-LPY-v1.4.pdf"
            }
          ]
        }
      ]
    },
    {
      "universityCode": "all-india-institute-of-medical-sciences-new-delhi",
      "courses": [
        {
          "courseName": "Surgery",
          "previousYearPapers": [
            {
              "year": 2023,
              "semester": "Spring",
              "pdfLink": "https://example.com/papers/surgery_2023_spring.pdf"
            },
            {
              "year": 2022,
              "semester": "Fall",
              "pdfLink": "https://example.com/papers/surgery_2022_fall.pdf"
            }
          ]
        },
        {
          "courseName": "Anatomy",
          "previousYearPapers": [
            {
              "year": 2022,
              "semester": "Spring",
              "pdfLink": "https://example.com/papers/anatomy_2022_spring.pdf"
            },
            {
              "year": 2021,
              "semester": "Fall",
              "pdfLink": "https://example.com/papers/anatomy_2021_fall.pdf"
            }
          ]
        }
      ]
    }
  ];

  const { universityName, courseName, year, term } = router.query;

  // Find the paper's PDF link based on the route parameters
  const paper = universityData.find(u => u.universityCode === universityName)?.courses
    .find(c => c.courseName === courseName)?.previousYearPapers
    .find(p => p.year === parseInt(year) && p.semester === term);

  const handleDownload = () => {
    if (paper) {
      window.open(paper.pdfLink, '_blank');
    }
  };

  return (
    <div>
      <h1>final paper to download of an entrance examination </h1>
      {/* {paper && (
        <div>
          <button onClick={handleDownload}>Download Paper</button>
          <br />
          <iframe src={paper.pdfLink} width="100%" height="600px"></iframe>
        </div>
      )} */}
    </div>
  );
}
