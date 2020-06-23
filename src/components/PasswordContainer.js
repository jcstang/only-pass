import React, { useState } from 'react';
import './PasswordContainer.css';

export default function PasswordContainer() {

  // USE STATE
  // =============================================================
  const [passwordText, setPasswordText] = useState('');


  const getRandomInt = (maxRange) => {
    // maxRange = 3, expected output 0, 1, 2
    return Math.floor(Math.random() * Math.floor(maxRange));
  }

  const generateRandomPassword = () => {
    const listOfSamplePasswords = [
      'ght$$jjlkRC##2yK',
      'ght$$jjlkRC@#$$%^2yK',
      'yup33t$$jjlkRC##2yK'
    ];

    return listOfSamplePasswords[getRandomInt(3)];
  }

  const changeHandler = (event) => setPasswordText(event.target.value);

  const submitHandler = (event) => {
    event.preventDefault();

    setPasswordText(generateRandomPassword());

  }

  // JSX - return statement
  // =============================================================
  return (
    <div className="container" id="password-container">
      <form onSubmit={submitHandler} className="form-inline justify-content-center">
        <div className="form-group mx-sm-3 mb-2">
          <label htmlFor="gen-password" className="sr-only">Password</label>
          <input onChange={changeHandler} type="text" className="form-control" id="gen-password" value={passwordText} placeholder="Password" />
        </div>
        <button type="submit" className="btn btn-primary mb-2">Generate Password</button>
        <button type="button" className="btn btn-warning mb-2 ml-2">Copy</button>
      </form>
    </div>
  );
}