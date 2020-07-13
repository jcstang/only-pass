import helperFuncs from "./helperFuncs";
const CHAR_LENGTH = 15;

describe("correct password output", () => {
  const configArray = ["LNS", "LN", "S", "SN", "N"];
  // * example input 'ULS' get passed into 2nd param, it describes using Upper and Lower and ymbols
  const freshlyBakedPassword = helperFuncs.createNewPassword(
    CHAR_LENGTH,
    configArray[0]
  );

  it("length should match", () => {
    expect(freshlyBakedPassword).toHaveLength(CHAR_LENGTH);
  });

  it("should be a valid password", () => {
    expect(freshlyBakedPassword).toMatch(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/);
    // expect(freshlyBakedPassword).toMatch(^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&]).{8,1}$);
  });

  it("should have a number", () => {
    expect(freshlyBakedPassword).toMatch(/[0-9]/);
  });
});
