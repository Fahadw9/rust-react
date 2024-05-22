/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';

function App() {
  const [text, setText] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://0.0.0.0:8000/api/text')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.text();
      })
      .then(data => setText(data))
      .catch(error => setError(error.toString()));
  }, []);

  return (
    <div>
      <h1>Text from Server:</h1>
      {error ? <p>Error: {error}</p> : <p>{text}</p>}
    </div>
  );
}

export default App;
