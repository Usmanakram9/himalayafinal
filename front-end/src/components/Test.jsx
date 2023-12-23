import React, { useEffect, useState } from 'react';

const Test = () => {
  const [allFormData, setAllFormData] = useState([]);
  const [visibleItem, setVisibleItem] = useState(1);

  useEffect(() => {
    // Retrieve the counter from localStorage
    const counter = localStorage.getItem('counter') || 0;

    // Create an array to hold the form data
    const formDataArray = [];

    // Loop through the counter and retrieve each form data entry
    for (let i = 1; i <= counter; i++) {
      const key = `formData${i}`;
      const formDataString = localStorage.getItem(key);

      // Check if data exists for the current key
      if (formDataString) {
        // Parse the JSON data and add it to the array
        const formData = JSON.parse(formDataString);
        formDataArray.push(formData);
      }
    }

    // Update the state with the retrieved data
    setAllFormData(formDataArray);
  }, []); // Empty dependency array ensures this effect runs once on component mount

  return (
    <div>
      <h2>All Form Data:</h2>
      {allFormData.map((formData, index) => (
        <div key={index} className="form-data">
          <h3>Form Data {index + 1}</h3>
          <ul>
            {Object.entries(formData).map(([key, value]) => (
              <li key={key}>
                <strong>{key}:</strong> {value}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Test;
