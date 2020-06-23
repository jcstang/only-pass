import React, { useState } from 'react';
import './PasswordContainer.css';
import helperFuncs from '../utils/helperFuncs';
import copy from 'copy-to-clipboard';

export default function PasswordContainer() {

  // USE STATE
  // =============================================================
  const [passwordText, setPasswordText] = useState('');
  const [characterLength, setCharacterLength] = useState(0);

  // const generateRandomPassword = () => {
  //   return helperFuncs.createNewPassword(characterLength);
  // }

  const changeHandler = (event) => setPasswordText(event.target.value);

  const submitHandler = (event) => {
    event.preventDefault();

    setPasswordText(helperFuncs.createNewPassword(characterLength));

  }

  const sliderChangeHandler = (event) => {
    // console.log(event.target.value);
    const passwordLength = event.target.value;

    setCharacterLength(passwordLength);
  }

  const copyButtonHandler = (event) => {
    // let copyValue = document.getElementById("copy-button");
    // copyValue.select();
    // copyValue.setSelectionRange(0, 99999);
    // document.execCommand("copy");
    let copyThing = document.getElementById('copy-button').value;

    copy(document.getElementById('copy-button').value);

    // alert('copied text: ' + copyValue.value);

  }

  // JSX - return statement
  // =============================================================
  return (
    <div className="container" id="password-container">
      {/* slider */}
      <form>
        <div className="form-group">
          <label htmlFor="formControlRange">Character Range {characterLength}</label>
          <input min="3" max="70" type="range" className="form-control-range" id="formControlRange" onChange={sliderChangeHandler} />
        </div>
      </form>

      {/* password generator */}
      <form onSubmit={submitHandler} className="form-inline justify-content-center">
        <div className="form-group mx-sm-3 mb-2">
          <label htmlFor="gen-password" className="sr-only">Password</label>
          <input onChange={changeHandler} type="text" className="form-control" id="gen-password" value={passwordText} placeholder="Password" />
        </div>
        <button type="submit" className="btn btn-primary mb-2">Generate Password</button>
        <button type="button" className="btn btn-warning mb-2 ml-2" id="copy-button" onClick={copyButtonHandler}>Copy</button>
      </form>
    </div>
  );
}