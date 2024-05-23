const fs = require('fs');

// Read the data from a JSON file
const data = JSON.parse(fs.readFileSync('latest_collage_list.json', 'utf8'));

// Find unique universities
const uniqueUniversities = [...new Set(data.map(item => item.universityName))];

// Create a new JSON with index and university name
const dropdownData = uniqueUniversities.map((university, index) => ({
  index: index + 1,
  universityName: university
}));

// Write the dropdownData to a new JSON file
fs.writeFileSync('dropdownData.json', JSON.stringify(dropdownData, null, 2));

console.log('Dropdown data written to dropdownData.json');