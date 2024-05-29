import React from 'react';
import { useRouter } from 'next/router';


const QuestionPaper = ({ paper }) => {
    const router = useRouter();

    if (router.isFallback) {
        return <div>Loading...</div>;
    }

    return (
       
            <div>
                <h1>{paper.title}</h1>
                {/* Display paper details */}
            </div>
       
    );
};

export default QuestionPaper;

// Implement getStaticPaths and getStaticProps for SSG
