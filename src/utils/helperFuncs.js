// ***************************************************************************
// * Helper funcs
// * start with arrays of diff charaters
// ***************************************************************************
const specialCharacters = ['$', '@', '#', '!', '%'];
const lowerCaseAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const upperCaseAlphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const numberArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// ALL OF THE THINGS
const lsnuArray = [...lowerCaseAlphabet, ...specialCharacters, ...numberArray, ...upperCaseAlphabet];

const uArray = [...upperCaseAlphabet];
const ulArray = [...upperCaseAlphabet, ...lowerCaseAlphabet];
const usArray = [...upperCaseAlphabet, ...specialCharacters];
const unArray = [...upperCaseAlphabet, ...numberArray];
const ulsArray = [...upperCaseAlphabet, ...lowerCaseAlphabet, ...specialCharacters];
const usnArray = [...upperCaseAlphabet, ...specialCharacters, ...numberArray];

const lArray = [...lowerCaseAlphabet];
const lsArray = [...lowerCaseAlphabet, ...specialCharacters];
const lsnArray = [...lowerCaseAlphabet, ...specialCharacters, ...numberArray];
const lnArray = [...lowerCaseAlphabet, ...numberArray];

const sArray = [...specialCharacters];
const snArray = [...specialCharacters, ...numberArray];

const nArray = [...numberArray];
const nulArray = [...numberArray, ...upperCaseAlphabet, ...lowerCaseAlphabet];


const getRandomInt = (maxRange) => {
  // maxRange = 3, expected output 0, 1, 2
  return Math.floor(Math.random() * Math.floor(maxRange));
}

const loopToCreatePassword = (passwordLength, logicArray) => {
  let craftedPasswordString = '';
  for (let i = 0; i < passwordLength; i++) {
    craftedPasswordString += logicArray[getRandomInt(logicArray.length)];
  }

  return craftedPasswordString;
}

const createNewPassword = (requestLength, logicString) => {
  // let craftedPasswordString = '';
  // possiblities
  // U, UL, ULS, US, USN, UN, L, LS, LSN, LSNU, S, SN, N, NUL, ULNS

  console.log(`inside of createNewPassword ${requestLength}, ${logicString}`);

  // FIXME: problem: symbols don't always show up, outcome: when a value is selected like "Include symbols" there SHOULD be a symbol.

  switch (logicString) {
    case 'U':
      return loopToCreatePassword(requestLength, uArray);
    case 'LU':
    case 'UL':
      return loopToCreatePassword(requestLength, ulArray);
    case 'ULS':
      return loopToCreatePassword(requestLength, ulsArray);
    case 'SU':
    case 'US':
      return loopToCreatePassword(requestLength, usArray);
    case 'USN':
      return loopToCreatePassword(requestLength, usnArray);
    case 'NU':
    case 'UN':
      return loopToCreatePassword(requestLength, unArray);
    case 'L':
      return loopToCreatePassword(requestLength, lArray);
    case 'SL':
    case 'LS':
      return loopToCreatePassword(requestLength, lsArray);
    case 'NL':
    case 'LN':
      return loopToCreatePassword(requestLength, lnArray);
    case 'LSN':
      return loopToCreatePassword(requestLength, lsnArray);
    case 'S':
      return loopToCreatePassword(requestLength, sArray);
    case 'NS':
    case 'SN':
      return loopToCreatePassword(requestLength, snArray);
    case 'N':
      return loopToCreatePassword(requestLength, nArray);
    case 'ULN':
    case 'NUL':
      return loopToCreatePassword(requestLength, nulArray);
    default:
      return loopToCreatePassword(requestLength, lsnuArray);
  }

};


module.exports = {
  createNewPassword: createNewPassword
}