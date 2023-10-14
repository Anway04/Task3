import React, { useState } from 'react';
import './App.css';

function App() {
 const [text, setText] = useState('');
 const [wordCount, setWordCount] = useState(0);

 const handleTextChange = (e) => {
    setText(e.target.value);
    setWordCount(e.target.value.split(' ').length);
 };

 return (
    <div className="App">
      <h1>Responsive Paragraph Word Counter</h1>
      <textarea
        value={text}
        onChange={handleTextChange}
        placeholder="Enter your text here..."
        rows="10"
        cols="50"
      />
      <h2>Word Count: {wordCount}</h2>
    </div>
 );
}

export default App;
