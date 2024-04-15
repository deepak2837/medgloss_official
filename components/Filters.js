import React from 'react';

const Filters = () => {
    // Mock data for filter options
    const universities = ['University A', 'University B', 'University C'];
    const examinationTypes = ['Type 1', 'Type 2', 'Type 3'];
    const courses = ['Course 1', 'Course 2', 'Course 3'];
    const years = ['2022', '2021', '2020'];

    return (
        <div className="filters">
            <h2>Search Filters</h2>
            {/* University filter */}
            <div>
                <label htmlFor="university">Search by University:</label>
                <select id="university">
                    <option value="">Select University</option>
                    {universities.map((university, index) => (
                        <option key={index} value={university}>{university}</option>
                    ))}
                </select>
            </div>
            {/* Examination type filter */}
            <div>
                <label htmlFor="examinationType">Examination Type:</label>
                <select id="examinationType">
                    <option value="">Select Examination Type</option>
                    {examinationTypes.map((type, index) => (
                        <option key={index} value={type}>{type}</option>
                    ))}
                </select>
            </div>
            {/* Course/Subject filter */}
            <div>
                <label htmlFor="course">Search by Course/Subject:</label>
                <select id="course">
                    <option value="">Select Course/Subject</option>
                    {courses.map((course, index) => (
                        <option key={index} value={course}>{course}</option>
                    ))}
                </select>
            </div>
            {/* Year filter */}
            <div>
                <label htmlFor="year">Search by Year:</label>
                <select id="year">
                    <option value="">Select Year</option>
                    {years.map((year, index) => (
                        <option key={index} value={year}>{year}</option>
                    ))}
                </select>
            </div>
            {/* Combination of Filters */}
            <div>
                <button>Search</button>
            </div>
        </div>
    );
};

export default Filters;
