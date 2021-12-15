import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [message, setMessage] = useState("Hello World");
  const [mining, setMining] = useState(false);
  function handleClick() {
    console.log('click');
    setMessage('Mining ...');
    setMining(true);
  }
  return (
    <div className="App">
      <header className="App-header">
        <button className="btn btn-primary" onClick={handleClick} disabled={mining}>
          {message}
        </button>
        {mining &&
          <img src={logo} className="App-logo" alt="logo" />
        }
      </header>
    </div>
  );
}

export default App;
