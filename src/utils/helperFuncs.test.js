import helperFuncs from "./helperFuncs";
const CHAR_LENGTH = 16;

const configObject = {
  upperCase: false,
  lowerCase: true,
  symbols: true,
  numbers: true,
};

describe("correct password output", () => {
  const configArray = ["LNS", "LN", "S", "SN", "N", "ULNS"];
  // * example input 'ULS' get passed into 2nd param, it describes using Upper and Lower and ymbols
  const freshlyBakedPassword = helperFuncs.createNewPassword(
    CHAR_LENGTH,
    configArray[5]
  );

  it("length should match", () => {
    expect(freshlyBakedPassword).toHaveLength(CHAR_LENGTH);
  });

  it("should have a number", () => {
    expect(freshlyBakedPassword).toMatch(/[0-9]/);
  });

  it("should be a valid password", () => {
    expect(freshlyBakedPassword).toMatch(generateRegEx(CHAR_LENGTH));
  });
});

const generateRegEx = (length) => {
  let regExWithVariable = "";

  // if (configString === "LNS") {
  //   regExWithVariable = `^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&]).{${length},}$`;
  //   return new RegExp(regExWithVariable, "g");
  // }

  regExWithVariable = `^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[#$^+=!*()@%&]).{${length},}$`;
  console.log(regExWithVariable);
  return new RegExp(regExWithVariable, "g");
};
