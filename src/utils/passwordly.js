// ***************************************************************************
// Passwordly
// password generator
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

const generate = (length, config) => {
  let freshlyBakedPassword = '';

  if (validateOptions(config)) {
    for (let i = 0; i < length; i++) {
      if (config.upperCase) {
        freshlyBakedPassword += upperCaseAlphabet[getRandomInt(length)];
      }
    }
  }

  return "P@s$Www0rD%%1";
};

const validateOptions = (config) => {
  if (config) {
    return true;
  }

  return false;
};

const getRandomInt = (maxRange) => {
  // maxRange = 3, expected output 0, 1, 2
  return Math.floor(Math.random() * Math.floor(maxRange));
};

module.exports = {
  generate: generate,
};
