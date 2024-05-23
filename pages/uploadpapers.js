
import React, { useState } from "react";
import Autosuggest from "react-autosuggest";
import dropdownData from "./dropdownData.json";

const QuestionPaperForm = ({ onSubmit }) => {
  const [university, setUniversity] = useState("");
  const [year, setYear] = useState("");
  const [semester, setSemester] = useState("");
  const [pdfFile, setPdfFile] = useState(null);
  const [suggestions, setSuggestions] = useState([]);
  const [query, setQuery] = useState("");
  const [course, setCourse] = useState("MBBS");
  const [subject, setSubject] = useState("");



  const getSuggestions = (value) => {
    const inputValues = value.trim().toLowerCase().split(/\s+/);
    const inputLength = inputValues.length;

    if (inputLength === 0) {
      return [];
    }

    const matches = dropdownData.filter((item) => {
      const universityName = item.universityName.toLowerCase();
      return inputValues.every((word) => universityName.includes(word));
    });

    return matches;
  };

  const onSuggestionsFetchRequested = ({ value }) => {
    setSuggestions(getSuggestions(value));
  };

  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const handleInputChange = (event, { newValue }) => {
    setQuery(newValue);
  };

  const handleSearch = (selectedUniversity) => {
    if (selectedUniversity) {
      setUniversity(selectedUniversity.universityName);
    }
  };

  const getSuggestionValue = (suggestion) => suggestion.universityName;

  const renderSuggestion = (suggestion) => (
    <div onClick={() => handleSearch(suggestion)}>{suggestion.universityName}</div>
  );

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setPdfFile(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validate form fields if needed
    console.log( university, year, semester, pdfFile, course, subject );
    
    try {
      // Create FormData object
      const formData = new FormData();
      formData.append("university", university);
      formData.append("year", year);
      formData.append("semester", semester);
      formData.append("course", course);
      formData.append("subject", subject);
      formData.append("pdfFile", pdfFile);

      // Send the form data to the API route
      const response = await fetch("/api/uploadpar", {
        method: "POST",
        body: formData,
      });
console.log(response)
      if (response.ok) {
        console.log("File uploaded and data stored successfully.");
        // Call the onSubmit function with the form data
        // onSubmit({ university, year, semester, pdfFile, course, subject });
      } else {
        console.error("Error uploading file and storing data.");
      }
    } catch (err) {
      console.error("Error:", err);
    }
  
    // Call onSubmit with form data
    // onSubmit({ university, year, semester, pdfFile });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="university">University:</label>
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={onSuggestionsFetchRequested}
          onSuggestionsClearRequested={onSuggestionsClearRequested}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          inputProps={{
            placeholder: "Search for a university...",
            value: query,
            onChange: handleInputChange,
          }}
        />
      </div>
      <div>
        <label htmlFor="year">Year:</label>
        <select
          id="year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        >
          <option value="">Select Year</option>
          {/* Add options dynamically based on your data */}
          <option value="2023">2023</option>
<option value="2022">2022</option>
<option value="2021">2021</option>
<option value="2020">2020</option>
<option value="2019">2019</option>
<option value="2018">2018</option>
<option value="2017">2017</option>
<option value="2016">2016</option>
<option value="2015">2015</option>
<option value="2014">2014</option>
<option value="2013">2013</option>
<option value="2012">2012</option>
<option value="2011">2011</option>
<option value="2010">2010</option>
<option value="2009">2009</option>
<option value="2008">2008</option>
<option value="2007">2007</option>
<option value="2006">2006</option>
<option value="2005">2005</option>
<option value="2004">2004</option>
        </select>
      </div>
      <div>
        <label htmlFor="semester">Semester:</label>
        <select
          id="semester"
          value={semester}
          onChange={(e) => setSemester(e.target.value)}
        >
          <option value="">Select Semester</option>
          <option value="Semester 1">Semester 1</option>
          <option value="Semester 2">Semester 2</option>
        </select>
      </div>
      <div>
        <label htmlFor="subject">Subject:</label>
        <select
          id="subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        >
          <option value="">Select Subject</option>
          <option value="Anatomy">Anatomy</option>
<option value="Physiology">Physiology</option>
<option value="Biochemistry">Biochemistry</option>
<option value="Pathology">Pathology</option>
<option value="Microbiology">Microbiology</option>
<option value="Pharmacology">Pharmacology</option>
<option value="Forensic Medicine">Forensic Medicine</option>
<option value="Community Medicine">Community Medicine</option>
<option value="Medicine">Medicine</option>
<option value="Surgery">Surgery</option>
<option value="Obstetrics and Gynaecology">Obstetrics and Gynaecology</option>
<option value="Paediatrics">Paediatrics</option>
<option value="Orthopaedics">Orthopaedics</option>
<option value="Dermatology">Dermatology</option>
<option value="Ophthalmology">Ophthalmology</option>
<option value="ENT">ENT (Ear, Nose, Throat)</option>
<option value="Psychiatry">Psychiatry</option>
<option value="Anaesthesiology">Anaesthesiology</option>
<option value="Radiology">Radiology</option>
<option value="Dentistry">Dentistry</option>
<option value="Emergency Medicine">Emergency Medicine</option>
<option value="Nephrology">Nephrology</option>
<option value="Cardiology">Cardiology</option>
<option value="Endocrinology">Endocrinology</option>
<option value="Pulmonology">Pulmonology</option>
<option value="Neurology">Neurology</option>
<option value="Rheumatology">Rheumatology</option>
<option value="Hematology">Hematology</option>
<option value="Oncology">Oncology</option>
<option value="Urology">Urology</option>
<option value="Gastroenterology">Gastroenterology</option>
<option value="Nutrition and Dietetics">Nutrition and Dietetics</option>
<option value="Physiotherapy">Physiotherapy</option>
<option value="Occupational Therapy">Occupational Therapy</option>
<option value="Speech Therapy">Speech Therapy</option>
<option value="Radiation Oncology">Radiation Oncology</option>
<option value="Medical Ethics">Medical Ethics</option>
<option value="Medical Genetics">Medical Genetics</option>
<option value="Medical Education">Medical Education</option>
<option value="Public Health">Public Health</option>
<option value="Medical Informatics">Medical Informatics</option>
<option value="Medical Research">Medical Research</option>
<option value="Other">Other</option>

        </select>
      </div>
      <div>
        <label htmlFor="pdfFile">Upload PDF:</label>
        <input
          type="file"
          id="pdfFile"
          accept=".pdf"
          onChange={handleFileChange}
        />
      </div>
      <div>
        <label htmlFor="course">Course:</label>
        <select
          id="course"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
        >
          <option value="MBBS">MBBS</option>
          <option value="BAMS">BAMS</option>
          <option value="BHMS">BHMS</option>
          <option value="BUMS">BUMS</option>
          {/* Add more options as needed */}
        </select>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default QuestionPaperForm;
