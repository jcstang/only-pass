// ***************************************************************************
// * Helper funcs
// * start with arrays of diff charaters
// ***************************************************************************
const specialCharacters = ["$", "@", "#", "!", "%", "^", "*"];
const lowerCaseAlphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const upperCaseAlphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
const numberArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// ALL OF THE THINGS
const lsnuArray = [
  ...lowerCaseAlphabet,
  ...specialCharacters,
  ...numberArray,
  ...upperCaseAlphabet,
];

const uArray = [...upperCaseAlphabet];
const ulArray = [...upperCaseAlphabet, ...lowerCaseAlphabet];
const usArray = [...upperCaseAlphabet, ...specialCharacters];
const unArray = [...upperCaseAlphabet, ...numberArray];
const ulsArray = [
  ...upperCaseAlphabet,
  ...lowerCaseAlphabet,
  ...specialCharacters,
];
const usnArray = [...upperCaseAlphabet, ...specialCharacters, ...numberArray];

const lArray = [...lowerCaseAlphabet];
const lsArray = [...lowerCaseAlphabet, ...specialCharacters];

// FIXME: problem: uncheck use uppercase letters. it still includes them., outcome: no uppercase when unchecked.
const lsnArray = [...lowerCaseAlphabet, ...specialCharacters, ...numberArray];
const lnArray = [...lowerCaseAlphabet, ...numberArray];

const sArray = [...specialCharacters];
const snArray = [...specialCharacters, ...numberArray];

const nArray = [...numberArray];
const nulArray = [...numberArray, ...upperCaseAlphabet, ...lowerCaseAlphabet];

const getRandomInt = (maxRange) => {
  // maxRange = 3, expected output 0, 1, 2
  return Math.floor(Math.random() * Math.floor(maxRange));
};

const loopToCreatePassword = (passwordLength, logicArray) => {
  let craftedPasswordString = "";
  for (let i = 0; i < passwordLength; i++) {
    craftedPasswordString += logicArray[getRandomInt(logicArray.length)];
  }

  return craftedPasswordString;
};

const createNewPassword = (requestLength, logicString) => {
  // possiblities
  // U, UL, ULS, US, USN, UN, L, LS, LSN, LSNU, S, SN, N, NUL, ULNS
  // console.log(`inside of createNewPassword ${requestLength}, ${logicString}`);

  // FIXME: problem: symbols don't always show up, outcome: when a value is selected like "Include symbols" there SHOULD be a symbol.
  console.log(`logicString: ${logicString}`);

  // ULNS
  switch (logicString) {
    case "U":
      return loopToCreatePassword(requestLength, uArray);
    case "UL":
      return loopToCreatePassword(requestLength, ulArray);
    case "ULS":
      return loopToCreatePassword(requestLength, ulsArray);
    case "US":
      return loopToCreatePassword(requestLength, usArray);
    case "USN":
      return loopToCreatePassword(requestLength, usnArray);
    case "NU":
    case "UN":
      return loopToCreatePassword(requestLength, unArray);
    case "L":
      return loopToCreatePassword(requestLength, lArray);
    case "SL":
    case "LS":
      return loopToCreatePassword(requestLength, lsArray);
    case "NL":
    case "LN":
      return loopToCreatePassword(requestLength, lnArray);
    case "LNS":
    case "LSN":
      return loopToCreatePassword(requestLength, lsnArray);
    case "S":
      return loopToCreatePassword(requestLength, sArray);
    case "NS":
    case "SN":
      return loopToCreatePassword(requestLength, snArray);
    case "N":
      return loopToCreatePassword(requestLength, nArray);
    case "ULN":
    case "NUL":
      return loopToCreatePassword(requestLength, nulArray);
    default:
      console.log(`DEFAULT PASSWORD GENERATION!`);
      return loopToCreatePassword(requestLength, lsnuArray);
  }
};

const createNewPassword2 = (requestLength, config) => {
  // const configObject = {
  //   upperCase: false,
  //   lowerCase: true,
  //   symbols: true,
  //   numbers: true
  // };
  const useUpperCase = config.upperCase;
  const useLowerCase = config.lowerCase;
  const useSymbols = config.symbols;
  const useNumbers = config.numbers;

  const U = useUpperCase && !useLowerCase && !useSymbols && !useNumbers;
  const UL = useUpperCase && useLowerCase && !useSymbols && !useNumbers;
  const USL = useUpperCase && useLowerCase && useSymbols && !useNumbers;
  const US = useUpperCase && !useLowerCase && useSymbols && !useNumbers;
  const USN = useUpperCase && !useLowerCase && !useSymbols && !useNumbers;
  const UN = useUpperCase && !useLowerCase && !useSymbols && useNumbers;
  const ULN = useUpperCase && useLowerCase && !useSymbols && useNumbers;

  if (useUpperCase) {
    // TODO: all options with 'U'
    // U, UL/LU, ULS, SU/US, USN, NU/UN, ULN/NUL
    // // U
    // if(!useLowerCase && !useSymbols && !useNumbers) {
    //   // return U
    //   return loopToCreatePassword(requestLength, uArray);
    // }
    // // UL/LU
    // if(useLowerCase && ) {
    //   return loopToCreatePassword(requestLength, ulArray);
    // }
    // ULS
    // SU/US
    // USN
    // NU/UN
    // ULN/NUL
  }
};

module.exports = {
  createNewPassword: createNewPassword,
  createNewPassword2: createNewPassword2,
};
