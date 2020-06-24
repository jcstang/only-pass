import React, { useState } from 'react';
import './PasswordContainer.css';
import helperFuncs from '../utils/helperFuncs';

export default function PasswordContainer(props) {

  // USE STATE
  // =============================================================
  const [passwordText, setPasswordText] = useState('');
  const [characterLength, setCharacterLength] = useState(16);
  // const [showA, setShowA] = useState(false);
  // const toggleShowA = () => setShowA(!showA);

  // const generateRandomPassword = () => {
  //   return helperFuncs.createNewPassword(characterLength);
  // }

  const changeHandler = (event) => setPasswordText(event.target.value);

  const submitHandler = (event) => {
    event.preventDefault();
    let comboOptions = '';
    const upperChar = document.getElementById('defaultCheck1').checked || false;
    const lowerChar = document.getElementById('defaultCheck2').checked || false;
    const numbersChar = document.getElementById('defaultCheck3').checked || false;
    const symbolsChar = document.getElementById('defaultCheck4').checked || false;

    // console.log(`U:${upperChar} L:${lowerChar} S:${symbolsChar} N:${numbersChar}`);

    if (upperChar) {
      comboOptions += 'U'
    }
    if (lowerChar) {
      comboOptions += 'L'
    }
    if (symbolsChar) {
      comboOptions += 'S'
    }
    if (numbersChar) {
      comboOptions += 'N'
    }
    // console.log(comboOptions);
    setPasswordText(helperFuncs.createNewPassword(characterLength, comboOptions));
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
        <div className="form-group sliders" id="char-slider">
          <label htmlFor="formControlRange">Character Range {characterLength}</label>
          <input min="3" max="50" type="range" className="form-control-range" id="formControlRange" onChange={sliderChangeHandler} value={characterLength} />
        </div>
      </form>

      <form className="form-checkbox text-left">
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="defaultCheck1" />
          <label className="form-check-label" htmlFor="defaultCheck1">
            Include uppercase letters
          </label>
        </div>
        <div className="form-check text-left">
          <input className="form-check-input" type="checkbox" value="" id="defaultCheck2" />
          <label className="form-check-label" htmlFor="defaultCheck2">
            Include lowercase letters
          </label>
        </div>
        <div className="form-check text-left">
          <input className="form-check-input" type="checkbox" value="" id="defaultCheck3" />
          <label className="form-check-label" htmlFor="defaultCheck3">
            Include Numbers
          </label>
        </div>
        <div className="form-check text-left">
          <input className="form-check-input" type="checkbox" value="" id="defaultCheck4" />
          <label className="form-check-label" htmlFor="defaultCheck4">
            Include Symbols
          </label>
        </div>
      </form>


      {/* password generator */}
      <form onSubmit={submitHandler} className="form justify-content-center">
        <div className="form-group mx-sm-3 mb-2">
          <label htmlFor="gen-password" className="sr-only">Password</label>
          <input onChange={changeHandler} type="text" className="form-control" id="gen-password" value={passwordText} placeholder="Password" />
        </div>
        <div className="form-group mx-sm-3 mb-2">
          <button type="submit" className="btn btn-primary mb-2">Generate Password</button>
          <button type="button" className="btn btn-warning mb-2 ml-2" id="copy-button" onClick={props.copyHandler}>Copy</button>
        </div>
      </form>

    </div>
  );
}