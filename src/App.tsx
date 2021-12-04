import React from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Let's build a Desktop App with
          <br />
          <br />
          <code><i style={{ fontSize: '40px', color: 'palevioletred' }}>Electron</i></code>
        </p>
      </header>
    </div>
  );
}

export default App;
