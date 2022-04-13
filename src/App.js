import React, { useState, useRef } from 'react';

function App() {

  const [file, setFile] = useState([]);
  const inputFile = useRef(null);

  const handleChange = e => {
    setFile([...file, e.target.files[0]]);
  }

  return (
    <div className="app">
      <h3>Open an input file on a button click in React - <a href="https://www.cluemediator.com" target="_blank" rel="noreferrer noopener">Clue Mediator</a></h3>

      <button
        onClick={() => inputFile.current.click()}>
        <img src="https://www.svgrepo.com/show/12604/paper-clip.svg" />
      </button>

      <input
        type="file"
        onChange={handleChange}
        ref={inputFile} />

      <strong>Uploaded Files:</strong> {file.map(x => x.name).join(', ')}
    </div>
  );
}

export default App;