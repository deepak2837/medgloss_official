import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Autosuggest from 'react-autosuggest';
import collegesData from './mbbs_college_list.json'; // Import the JSON data

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const router = useRouter();

  const getSuggestions = (value) => {
    const inputValues = value.trim().toLowerCase().split(/\s+/); // Split input string into individual words
    const inputLength = inputValues.length;
  
    if (inputLength === 0) {
      return [];
    }
  
    // Filter colleges that contain all or most of the input words
    const matches = collegesData.filter(college => {
      const collegeName = college.collegeName.toLowerCase();
      return inputValues.every(word => collegeName.includes(word));
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

  const handleSearch = (selectedCollege) => {
    if (selectedCollege) {
      const collegeNameWithDashes = selectedCollege.collegeName
        .replace(/,/g, '') // Remove commas
        .replace(/\s+/g, '-') // Replace spaces with dashes
        .toLowerCase(); // Convert to lowercase
      router.push(`/pyq/${encodeURIComponent(collegeNameWithDashes)}`);
    }
  };

  const getSuggestionValue = (suggestion) => suggestion.collegeName;

  const renderSuggestion = (suggestion) => (
    <div
      className="p-2 hover:bg-gray-200 cursor-pointer text-black" // Tailwind styles for suggestions
      onClick={() => handleSearch(suggestion)}
    >
      {suggestion.collegeName}
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
          placeholder: 'Search for a college...',
          value: query,
          onChange: handleInputChange,
          className: 'w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-pink-400 focus:outline-none text-black' // Tailwind styles for input
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
