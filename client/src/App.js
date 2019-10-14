import React from "react";
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js fucking interesting</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <a  className="App-link"
          target="_blank"
          rel="noopener noreferrer" href='/auth/google'>Sign In With Google</a>
      </header>
    </div>
  );
}

export default App;
