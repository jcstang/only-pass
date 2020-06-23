import React from 'react';
import logo from './logo.svg';
import './App.css';
import PasswordContainer from './components/PasswordContainer';

function App() {
  return (
    <div className="App">
      <nav className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>OnlyPass</h1>
        <h6 className="text-muted">The only password generator you will ever need.</h6>
      </nav>
      <PasswordContainer />
    </div>
  );
}

export default App;
