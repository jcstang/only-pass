import React, { useState } from 'react';
import './PasswordContainer.css';
import helperFuncs from '../utils/helperFuncs';

export default function PasswordContainer(props) {

  // USE STATE
  // =============================================================
  const [passwordText, setPasswordText] = useState('');
  const [characterLength, setCharacterLength] = useState(16);
  const [useUpper, setUseUpper] = useState(true);
  const [useLower, setUseLower] = useState(true);
  const [useNumber, setUseNumber] = useState(true);
  const [useSymbol, setUseSymbol] = useState(true);

  const changeHandler = (event) => setPasswordText(event.target.value);
  const sliderChangeHandler = (event) => setCharacterLength(event.target.value);


  const submitHandler = (event) => {
    event.preventDefault();

    const configString =
      (useUpper ? 'U' : '')
      + (useLower ? 'L' : '')
      + (useNumber ? 'N' : '')
      + (useSymbol ? 'S' : '').trim();

    // SET STATE
    setPasswordText(helperFuncs.createNewPassword(characterLength, configString));
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

      {/* checkbox area */}
      <form className="form-checkbox text-left">

        {/* upper checkbox */}
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="defaultCheck1"
            checked={useUpper}
            onChange={() => setUseUpper(!useUpper)}
          />
          <label className="form-check-label" htmlFor="defaultCheck1">
            Include uppercase letters
          </label>
        </div>

        {/* lower checkbox */}
        <div className="form-check text-left">
          <input
            className="form-check-input"
            type="checkbox"
            id="defaultCheck2"
            checked={useLower}
            onChange={() => setUseLower(!useLower)}
          />
          <label className="form-check-label" htmlFor="defaultCheck2">
            Include lowercase letters
          </label>
        </div>

        {/* number checkbox */}
        <div className="form-check text-left">
          <input
            className="form-check-input"
            type="checkbox"
            id="defaultCheck3"
            checked={useNumber}
            onChange={() => setUseNumber(!useNumber)}
          />
          <label className="form-check-label" htmlFor="defaultCheck3">
            Include Numbers
          </label>
        </div>

        {/* symbol checkbox */}
        <div className="form-check text-left">
          <input
            className="form-check-input"
            type="checkbox"
            id="defaultCheck4"
            checked={useSymbol}
            onChange={() => setUseSymbol(!useSymbol)}
          />
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