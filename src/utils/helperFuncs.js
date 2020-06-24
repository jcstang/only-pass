// ***************************************************************************
// * Helper funcs
// * start with arrays of diff charaters
// ***************************************************************************

const specialCharacters = ['$', '@', '#', '!', '%'];
const lowerCaseAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const upperCaseAlphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const numberArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const allCharactersArray = [...specialCharacters, ...lowerCaseAlphabet, ...upperCaseAlphabet, ...numberArray];

// upper OR lower OR Symbol OR Number
const uArray = [...upperCaseAlphabet];
const lArray = [...lowerCaseAlphabet];
const sArray = [...specialCharacters];
const nArray = [...numberArray];

// (upper AND lower) OR (upper AND Symbols) OR etc...
const ulArray = [...upperCaseAlphabet, ...lowerCaseAlphabet];
const usArray = [...upperCaseAlphabet, ...specialCharacters];
const unArray = [...upperCaseAlphabet, ...numberArray];
const lsArray = [...lowerCaseAlphabet, ...specialCharacters];
const snArray = [...specialCharacters, ...numberArray];

const ulsArray = [...upperCaseAlphabet, ...lowerCaseAlphabet, ...specialCharacters];
const nulArray = [...numberArray, ...upperCaseAlphabet, ...lowerCaseAlphabet];
const usnArray = [...upperCaseAlphabet, ...specialCharacters, ...numberArray];
const lsnArray = [...lowerCaseAlphabet, ...specialCharacters, ...numberArray];

const lsnuArray = [...lowerCaseAlphabet, ...specialCharacters, ...numberArray, ...upperCaseAlphabet];

const getRandomInt = (maxRange) => {
  // maxRange = 3, expected output 0, 1, 2
  return Math.floor(Math.random() * Math.floor(maxRange));
}

const loopToCreatePassword = (requestLength, logicArray) => {
  let craftedPasswordString = '';
  for (let i = 0; i < requestLength; i++) {
    craftedPasswordString += logicArray[getRandomInt(logicArray.length)];
  }

  return craftedPasswordString;
}

const createNewPassword = (requestLength, logicString) => {
  // let craftedPasswordString = '';
  // possiblities
  // U, UL, ULS, US, USN, UN, L, LS, LSN, LSNU, S, SN, N, NUL

  switch (logicString) {
    case 'U':
      // for (let i = 0; i < requestLength; i++) {
      //   craftedPasswordString += uArray[getRandomInt(uArray.length)];
      // }
      return loopToCreatePassword(requestLength, uArray);
    case 'UL':
      // for (let i = 0; i < requestLength; i++) {
      //   craftedPasswordString += ulArray[getRandomInt(ulArray.length)];
      // }
      // break;
      return loopToCreatePassword(requestLength, ulArray);
    case 'ULS':
      // for (let i = 0; i < requestLength; i++) {
      //   craftedPasswordString += ulsArray[getRandomInt(ulsArray.length)];
      // }
      // break;
      return loopToCreatePassword(requestLength, ulsArray);
    case 'US':
      // for (let i = 0; i < requestLength; i++) {
      //   craftedPasswordString += usArray[getRandomInt(usArray.length)];
      // }
      // break;
      return loopToCreatePassword(requestLength, usArray);
    case 'USN':
      // for (let i = 0; i < requestLength; i++) {
      //   craftedPasswordString += usnArray[getRandomInt(usnArray.length)];
      // }
      // break;
      return loopToCreatePassword(requestLength, usnArray);
    case 'UN':
      // for (let i = 0; i < requestLength; i++) {
      //   craftedPasswordString += unArray[getRandomInt(unArray.length)];
      // }
      // break;
      return loopToCreatePassword(requestLength, unArray);
    case 'L':
      // for (let i = 0; i < requestLength; i++) {
      //   craftedPasswordString += lArray[getRandomInt(lArray.length)];
      // }
      // break;
      return loopToCreatePassword(requestLength, lArray);
    case 'LS':
      // for (let i = 0; i < requestLength; i++) {
      //   craftedPasswordString += lsArray[getRandomInt(lsArray.length)];
      // }
      // break;
      return loopToCreatePassword(requestLength, lsArray);
    case 'LSN':
      // for (let i = 0; i < requestLength; i++) {
      //   craftedPasswordString += lsnArray[getRandomInt(lsnArray.length)];
      // }
      // break;
      return loopToCreatePassword(requestLength, lsnArray);
    case 'LSNU':
      // for (let i = 0; i < requestLength; i++) {
      //   craftedPasswordString += lsnuArray[getRandomInt(lsnuArray.length)];
      // }
      // break;
      return loopToCreatePassword(requestLength, lsnuArray);
    case 'S':
      // for (let i = 0; i < requestLength; i++) {
      //   craftedPasswordString += sArray[getRandomInt(sArray.length)];
      // }
      // console.log(craftedPasswordString);
      // break;
      return loopToCreatePassword(requestLength, sArray);
    case 'SN':
      // for (let i = 0; i < requestLength; i++) {
      //   craftedPasswordString += snArray[getRandomInt(snArray.length)];
      // }
      // break;
      return loopToCreatePassword(requestLength, snArray);
    case 'N':
      // for (let i = 0; i < requestLength; i++) {
      //   craftedPasswordString += nArray[getRandomInt(nArray.length)];
      // }
      // break;
      return loopToCreatePassword(requestLength, nArray);
    case 'NUL':
      // for (let i = 0; i < requestLength; i++) {
      //   craftedPasswordString += nulArray[getRandomInt(nulArray.length)];
      // }
      // break;
      return loopToCreatePassword(requestLength, nulArray);
    default:
      // for (let i = 0; i < requestLength; i++) {
      //   craftedPasswordString += allCharactersArray[getRandomInt(allCharactersArray.length)];
      // }
      // break;
      return loopToCreatePassword(requestLength, allCharactersArray);
  }
  // return craftedPasswordString;
};


module.exports = {
  createNewPassword: createNewPassword
}