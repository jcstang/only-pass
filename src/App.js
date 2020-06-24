import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import PasswordContainer from './components/PasswordContainer';
import Toast from 'react-bootstrap/Toast';

function App() {

  const [showA, setShowA] = useState(false);
  const toggleShowA = () => setShowA(!showA);

  const copyHandler = (event) => {
    let copyValue = document.getElementById("gen-password");
    console.log(copyValue.value);

    copyValue.select();
    copyValue.setSelectionRange(0, 99999);
    document.execCommand("copy");

    toggleShowA();
  }

  return (
    <div className="App">
      <nav className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Toast show={showA} onClose={toggleShowA}>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded mr-2"
              alt=""
            />
            <strong className="mr-auto">Clipboard</strong>
          </Toast.Header>
          <Toast.Body>Woohoo, password copied to the clipboard</Toast.Body>
        </Toast>
        <h1>OnlyPass</h1>
        <h6 className="text-muted">The only password generator you will ever need.</h6>
      </nav>
      <PasswordContainer
        copyHandler={copyHandler}
      />
    </div>
  );
}

export default App;
