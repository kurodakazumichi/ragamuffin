import { enum2StringKeyObject } from './index';

//=============================================================================
// TestData
//=============================================================================
enum EnumA {
  A, B, C
};
const CONVERTED_ENUM_A = {
  A:0, B:1, C:2
};

enum EnumB {
  A = "A",
  B = "B",
  C = "C",
};
const CONVERTED_ENUM_B = {
  A:"A", B:"B", C:"C"
};

enum EnumC {
  A,
  B,
  C = "C",
};
const CONVERTED_ENUM_C = {
  A:0, B:1, C:"C"
};

//=============================================================================
// Test
//=============================================================================
describe("enum2StringKeyObject", () => {

  describe.each`
    title | param       | result
    ${"Enum(number)"} | ${EnumA}        | ${CONVERTED_ENUM_A}
    ${"Enum(string)"} | ${EnumB}        | ${CONVERTED_ENUM_B}
    ${"Enum(mix)"}    | ${EnumC}        | ${CONVERTED_ENUM_C}
    ${"null"}         | ${null}         | ${{}}
    ${"Array"}        | ${[]}           | ${{}}
    ${"Date"}         | ${new Date()}   | ${{}}
  `("enumがjsonに変換されること", ({title, param, result}) => {
    it(`give ${title}`, () => {
      expect(enum2StringKeyObject(param)).toEqual(result);
    })
  })
  
})