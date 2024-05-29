import React from 'react';
import Link from 'next/link';

const QuestionPaperCard = ({ paper }) => {
    const handleClick = () => {
        // Handle navigation to the respective route
        // For now, we are just logging the paper details
        console.log(`Navigating to ${paper.university} page`);
    };

    return (
        <div className="question-paper-card" onClick={handleClick}>
            <h2>{paper.title}</h2>
            <p>University: {paper.university}</p>
            <p>Year: {paper.year}</p>
            {/* Add more details as needed */}
            <Link href={`/university/${encodeURIComponent(paper.university)}`}>
                <a>View University</a>
            </Link>
        </div>
    );
};


