// ***************************************************************************
// * Helper funcs
// * start with arrays of diff charaters
// ***************************************************************************

const specialCharacters = ['$', '@', '#', '!', '%'];
const lowerCaseAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const upperCaseAlphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const numberArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const allCharactersArray = [...specialCharacters, ...lowerCaseAlphabet, ...upperCaseAlphabet, ...numberArray];


const getRandomInt = (maxRange) => {
  // maxRange = 3, expected output 0, 1, 2
  return Math.floor(Math.random() * Math.floor(maxRange));
}

const createNewPassword = (requestLength) => {
  let craftedPasswordString = '';

  for (let i = 0; i < requestLength; i++) {
    craftedPasswordString += allCharactersArray[getRandomInt(allCharactersArray.length)];
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