import { useState } from 'react';
import { useRouter } from 'next/router';

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
            "pdfLink": "https://example.com/papers/biology_2021_spring.pdf"
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

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const router = useRouter();

  const handleInputChange = (event) => {
    const userInput = event.target.value.toLowerCase();
    console.log(userInput)
    setQuery(userInput);
    const results = searchPapers(userInput);
    setSearchResults(results);
  };

  const searchPapers = (query) => {
    const results = [];
    universityData.forEach(university => {
      university.courses.forEach(course => {
        course.previousYearPapers.forEach(paper => {
          if (paper.year.toString().includes(query) || paper.semester.toLowerCase().includes(query)) {
            results.push({ universityCode: university.universityCode, courseName: course.courseName, paper });
          }
        });
      });
    });
    return results;
  };
//comment 
  const handlePaperClick = (result) => {
    console.log(result)
    // const { universityCode, courseName, paper } = result;
    // console.log(universityCode, courseName, paper )
    router.push(`/${result.universityCode}/${result.courseName}/${result.paper.year}/${result.paper.semester}`);
  };
  

  return (
    <div>
      <input
        type="text"
        placeholder="Search for a paper..."
        value={query}
        onChange={handleInputChange}
      />
      {/* Search results */}
      {searchResults.length > 0 && (
        <ul>
          {searchResults.map((result, index) => (
            <li key={index} onClick={() => handlePaperClick(result)}>
              {result.courseName} {result.paper.year} {result.paper.semester} paper
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
