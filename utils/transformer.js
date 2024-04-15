const fs = require('fs');

fs.readFile("../components/mbbs_collage_list.json", 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }

  try {
    const collegesData = JSON.parse(data);

    // Destructure and transform the data
    const transformedData = collegesData.map(({ index, type, universityName, collegeName }) => ({
      index,
      type,
      universityName,
      collegeName
    }));

    // Write the transformed data to a new JSON file
    fs.writeFile('latest_collage_list.json', JSON.stringify(transformedData, null, 2), (err) => {
      if (err) {
        console.error('Error writing file:', err);
        return;
      }
      console.log('Data has been transformed and saved to latest_collage_list.json');
    });
  } catch (err) {
    console.error('Error parsing JSON:', err);
  }
});
