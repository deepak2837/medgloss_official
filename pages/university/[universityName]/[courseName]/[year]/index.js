import { useRouter } from 'next/router';

export default function SemesterPaperPage() {
  const router = useRouter();
  const { year, semester } = router.query;

  return <h1>Semester {year} {semester}</h1>;
}
