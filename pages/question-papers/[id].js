import React from 'react';
import { useRouter } from 'next/router';
import Layout from '../../../components/Layout';

const QuestionPaper = ({ paper }) => {
    const router = useRouter();

    if (router.isFallback) {
        return <div>Loading...</div>;
    }

    return (
        <Layout>
            <div>
                <h1>{paper.title}</h1>
                {/* Display paper details */}
            </div>
        </Layout>
    );
};

export default QuestionPaper;

// Implement getStaticPaths and getStaticProps for SSG
