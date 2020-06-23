import React, { useState } from 'react';
import './PasswordContainer.css';
import helperFuncs from '../utils/helperFuncs';

export default function PasswordContainer() {

  // USE STATE
  // =============================================================
  const [passwordText, setPasswordText] = useState('');
  const [characterLength, setCharacterLength] = useState(0);


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

    const specialCharacters = [
      '$',
      '@',
      '#',
      '!',
      '%'
    ];

    const lowerCaseAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const lowerCaseAlphabetLength = lowerCaseAlphabet.length;
    const upperCaseAlphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    const upperCaseAlphabetLength = upperCaseAlphabet.length;

    const craftedPassword =
      lowerCaseAlphabet[getRandomInt(lowerCaseAlphabetLength)]
      + getRandomInt(100).toString()
      + upperCaseAlphabet[getRandomInt(upperCaseAlphabetLength)]
      + characterLength.toString();


    console.log(craftedPassword);
    console.log(helperFuncs.createNewPassword());

    return craftedPassword;
  }

  const changeHandler = (event) => setPasswordText(event.target.value);

  const submitHandler = (event) => {
    event.preventDefault();

    setPasswordText(generateRandomPassword());

  }

  const sliderChangeHandler = (event) => {
    // console.log(event.target.value);
    const passwordLength = event.target.value;

    setCharacterLength(passwordLength);
  }

  // JSX - return statement
  // =============================================================
  return (
    <div className="container" id="password-container">
      {/* slider */}
      <form>
        <div class="form-group">
          <label for="formControlRange">Character Range {characterLength}</label>
          <input type="range" class="form-control-range" id="formControlRange" onChange={sliderChangeHandler} />
        </div>
      </form>

      {/* password generator */}
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