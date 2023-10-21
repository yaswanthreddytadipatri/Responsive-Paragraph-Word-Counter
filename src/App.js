import React, { useState } from 'react';

function App() {
  const [text, setText] = useState('');
  
  const handleInputChange = (e) => {
    setText(e.target.value);
  };
  
  const countWords = (text) => {
    const words = text.trim().split(/\s+/);
    return words.length;
  };

  return (
    <div>
      <center>
      <h1>Responsive Paragraph Word Counter</h1>
      <textarea
        rows="4"
        cols="50"
        value={text}
        onChange={handleInputChange}
      />
      <p>Word Count: {countWords(text)}</p>
      </center>
    </div>
  );
}

export default App;
