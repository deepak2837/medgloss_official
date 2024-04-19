import { useRouter } from 'next/router';
import { useState } from 'react';

export default function SemesterPaperPage() {
  const router = useRouter();

  // Mock data for examination cards
  const examinations = [
    { name: 'NEET PG', link: '/neet-pg' },
    { name: 'NEET UG', link: '/neet-ug' },
    { name: 'AIIMS PG', link: '/aiims-pg' },
    { name: 'AIIMS UG', link: '/aiims-ug' },
    { name: 'JIPMER PG', link: '/jipmer-pg' },
    { name: 'JIPMER UG', link: '/jipmer-ug' },
    { name: 'USMLE', link: '/usmle' },
    { name: 'PLAB', link: '/plab' },
    { name: 'BHMS', link: '/bhms' },
    { name: 'BAMS', link: '/bams' },
    { name: 'JEE Main', link: '/jee-main' },
    { name: 'JEE Advanced', link: '/jee-advanced' },
    { name: 'NPAT', link: '/npat' },
    { name: 'NEET MDS', link: '/neet-mds' },
    { name: 'NEET SS', link: '/neet-ss' },
    { name: 'NEET DNB', link: '/neet-dnb' },
    { name: 'NEET PG Diploma', link: '/neet-pg-diploma' },
    { name: 'NEET Ayurveda', link: '/neet-ayurveda' },
    { name: 'NEET Homeopathy', link: '/neet-homeopathy' },
    { name: 'NEET Unani', link: '/neet-unani' },
    { name: 'NEET Siddha', link: '/neet-siddha' },
    { name: 'NPMT', link: '/npmt' },
    { name: 'GPAT', link: '/gpat' },
    { name: 'CMAT', link: '/cmat' },
    { name: 'ICAR AIEEA', link: '/icar-aieea' },
    { name: 'ICAR AICE', link: '/icar-aice' },
    { name: 'NCHM JEE', link: '/nchm-jee' },
    { name: 'CLAT', link: '/clat' },
    { name: 'LSAT India', link: '/lsat-india' },
    { name: 'MAT', link: '/mat' },
    { name: 'XAT', link: '/xat' },
    { name: 'SNAP', link: '/snap' },
    { name: 'IIFT', link: '/iift' },
    { name: 'NMAT', link: '/nmat' },
    // Add more examination cards as needed
  ];

  // State to track if a card is clicked
  const [selectedExam, setSelectedExam] = useState(null);

  const handleExamClick = (link) => {
    router.push(link); // Navigate to the specified link
  };

  return (
    <div>
      <h1>Entrance Exam Previous Year Papers</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {examinations.map((exam, index) => (
          <div key={index} style={{ margin: '10px', padding: '10px', border: '1px solid #ccc' }}>
            <h3>{exam.name}</h3>
            <button onClick={() => handleExamClick(exam.link)}>Go to Examination</button>
          </div>
        ))}
      </div>
    </div>
  );
}