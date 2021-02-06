import React, {useState, useEffect} from 'react';
import socketIOClient from "socket.io-client";
import logo from './logo.svg';
import './App.css';

function App() {

  const ENDPOINT = "http://127.0.0.1:5000";
  const [response, setResponse] = useState("");

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.on("seen", (data: any) => {
      setResponse(data.message);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        {response} Edit <code>src/App.tsx</code> and save to reload now.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
