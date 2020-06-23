
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

const getRandomInt = (maxRange) => {
  // maxRange = 3, expected output 0, 1, 2
  return Math.floor(Math.random() * Math.floor(maxRange));
}

const pickCharacterArray = () => {
  const arrOfArrays = [
    lowerCaseAlphabet,
    upperCaseAlphabet,
    specialCharacters,
    getRandomInt
  ];

  return arrOfArrays[getRandomInt[arrOfArrays.length]];
}

const createNewPassword = (requestLength) => {

  const sizeAttachment = requestLength || '0';
  const craftedPassword =
    lowerCaseAlphabet[getRandomInt(lowerCaseAlphabetLength)]
    + getRandomInt(100).toString()
    + specialCharacters[getRandomInt(specialCharacters.length)]
    + upperCaseAlphabet[getRandomInt(upperCaseAlphabetLength)]
    + sizeAttachment;

  return craftedPassword.toString();
};


module.exports = {
  createNewPassword: createNewPassword
}