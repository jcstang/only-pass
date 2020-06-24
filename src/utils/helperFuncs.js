// ***************************************************************************
// * Helper funcs
// * start with arrays of diff charaters
// ***************************************************************************

const specialCharacters = ['$', '@', '#', '!', '%'];
const lowerCaseAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const upperCaseAlphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const numberArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const allCharactersArray = [...specialCharacters, ...lowerCaseAlphabet, ...upperCaseAlphabet, ...numberArray];

const uArray = [...upperCaseAlphabet];
const lArray = [...lowerCaseAlphabet];
const sArray = [...specialCharacters];
const nArray = [...numberArray];

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

// TODO: options to choose include certain things
const createNewPassword = (requestLength, logicString) => {
  let craftedPasswordString = '';
  // let decideLogic = 1;
  let decideLogic = '';

  console.log(logicString)

  // ******* options create *******
  // 1 with upper
  // 2 with upper, lower
  // 3 with upper, lower, symbols
  // 4 lower
  // 5 lower, symbols
  // with upper, lower, symbols, numbers OR catchall?

  // U
  // UL
  // ULS
  // US
  // USN
  // UN
  // L
  // LS
  // LSN
  // LSNU
  // S
  // SN
  // N
  // NUL

  switch (logicString) {
    case 'U':
      for (let i = 0; i < requestLength; i++) {
        // craftedPasswordString += allCharactersArray[getRandomInt(allCharactersArray.length)];
        craftedPasswordString += uArray[getRandomInt(uArray.length)];
      }
      break;
    case 'UL':
      for (let i = 0; i < requestLength; i++) {
        craftedPasswordString += ulArray[getRandomInt(ulArray.length)];
      }
      break;
    case 'ULS':
      for (let i = 0; i < requestLength; i++) {
        craftedPasswordString += ulsArray[getRandomInt(ulsArray.length)];
      }
      break;
    case 'US':
      for (let i = 0; i < requestLength; i++) {
        craftedPasswordString += usArray[getRandomInt(usArray.length)];
      }
      break;
    case 'USN':
      for (let i = 0; i < requestLength; i++) {
        craftedPasswordString += usnArray[getRandomInt(usnArray.length)];
      }
      break;
    case 'UN':
      for (let i = 0; i < requestLength; i++) {
        craftedPasswordString += unArray[getRandomInt(unArray.length)];
      }
      break;
    case 'L':
      for (let i = 0; i < requestLength; i++) {
        craftedPasswordString += lArray[getRandomInt(lArray.length)];
      }
      break;
    case 'LS':
      for (let i = 0; i < requestLength; i++) {
        craftedPasswordString += lsArray[getRandomInt(lsArray.length)];
      }
      break;
    case 'LSN':
      for (let i = 0; i < requestLength; i++) {
        craftedPasswordString += lsnArray[getRandomInt(lsnArray.length)];
      }
      break;
    case 'LSNU':
      for (let i = 0; i < requestLength; i++) {
        craftedPasswordString += lsnuArray[getRandomInt(lsnuArray.length)];
      }
      break;
    case 'S':
      for (let i = 0; i < requestLength; i++) {
        craftedPasswordString += sArray[getRandomInt(sArray.length)];
      }
      console.log(craftedPasswordString);
      break;
    case 'SN':
      for (let i = 0; i < requestLength; i++) {
        craftedPasswordString += snArray[getRandomInt(snArray.length)];
      }
      break;
    case 'N':
      for (let i = 0; i < requestLength; i++) {
        craftedPasswordString += nArray[getRandomInt(nArray.length)];
      }
      break;
    case 'NUL':
      for (let i = 0; i < requestLength; i++) {
        craftedPasswordString += nulArray[getRandomInt(nulArray.length)];
      }
      break;
    default:
      for (let i = 0; i < requestLength; i++) {
        craftedPasswordString += allCharactersArray[getRandomInt(allCharactersArray.length)];
      }
      break;
  }





  // console.log('we are inside create new password');
  // console.log(craftedPasswordString);
  // console.log(`here is craftedpasswordstring length: ${craftedPasswordString.length}`);
  // console.log(`here is requested length: ${requestLength}`);

  return craftedPasswordString;
};


module.exports = {
  createNewPassword: createNewPassword
}