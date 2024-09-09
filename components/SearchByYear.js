import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Autosuggest from 'react-autosuggest';
import coursesData from './mbbs_college_list.json'; // Import the JSON data containing course and year info

export default function SearchByYear({ selectedCourse }) {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const router = useRouter();

  const getSuggestions = (value) => {
    const inputValues = value.trim().toLowerCase().split(/\s+/);
    const inputLength = inputValues.length;

    if (inputLength === 0) {
      return [];
    }

    // Find the yearsArray for the selected course and filter matching years
    const matches = coursesData
      .find(course => course.name === selectedCourse)?.years // Find years for the selected course
      .filter(year => inputValues.every(word => year.toLowerCase().includes(word))) || [];

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

  const handleSearch = (selectedYear) => {
    if (selectedYear) {
      const yearSlug = selectedYear.replace(/\s+/g, '-').toLowerCase();
      router.push(`/course/${selectedCourse}/year/${encodeURIComponent(yearSlug)}`);
    }
  };

  const getSuggestionValue = (suggestion) => suggestion;

  const renderSuggestion = (suggestion) => (
    <div
      className="p-2 hover:bg-gray-200 cursor-pointer text-black"
      onClick={() => handleSearch(suggestion)}
    >
      {suggestion}
    </div>
  );

  return (
    <div className="relative">
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
        onSuggestionsClearRequested={onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={{
          placeholder: 'Search for a year...',
          value: query,
          onChange: handleInputChange,
          className: 'w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-400 focus:outline-none text-black'
        }}
        theme={{
          container: 'relative',
          suggestionsContainer: 'absolute z-10 w-full bg-white shadow-lg border border-gray-200 mt-1',
          suggestionsList: 'm-0 p-0 list-none',
        }}
      />
    </div>
  );
}
