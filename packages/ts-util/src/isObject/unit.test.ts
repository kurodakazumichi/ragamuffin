import { isObject } from './index';

//=============================================================================
// TestData
//=============================================================================
class A {
  toString() { return "A" }
}

//=============================================================================
// Test
//=============================================================================
describe("isObject", () => {

  describe.each`
  param             | result
  ${{}}             | ${true}
  ${"string"}       | ${false}
  ${0}              | ${false}
  ${NaN}            | ${false}
  ${Infinity}       | ${false}
  ${true}           | ${false}
  ${null}           | ${false}
  ${undefined}      | ${false}
  ${Symbol()}       | ${false}
  ${Symbol(0)}      | ${false}
  ${Symbol("a")}    | ${false}
  ${[]}             | ${false}
  ${() => {}}       | ${false}
  ${Date}           | ${false}
  ${Map}            | ${false}
  ${RegExp}         | ${false}
  ${A}              | ${false}
  ${new Date()}     | ${false}
  ${new Map()}      | ${false}
  ${new RegExp("")} | ${false}
  ${new A()}        | ${false}

  `
  (`指定された変数がオブジェクトかどうかを判定する`, ({param, result}) => {
    test(`toTypeString(${param? param.toString() : param}) is ${result}`, () => {
      expect(isObject(param)).toBe(result);
    })
  })
  
});
