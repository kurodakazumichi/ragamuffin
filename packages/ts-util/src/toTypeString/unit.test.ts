import { toTypeString } from './index';

//=============================================================================
// Test
//=============================================================================
describe("toTypeString", () => {

  describe.each`
  param              | result
  ${"string"}       | ${"string"}
  ${0}              | ${"number"}
  ${NaN}            | ${"number"}
  ${Infinity}       | ${"number"}
  ${true}           | ${"boolean"}
  ${null}           | ${"null"}
  ${undefined}      | ${"undefined"}
  ${Symbol()}       | ${"symbol"}
  ${Symbol(0)}      | ${"symbol"}
  ${Symbol("a")}    | ${"symbol"}
  ${[]}             | ${"array"}
  ${{}}             | ${"object"}
  ${() => {}}       | ${"function"}
  ${Date}           | ${"function"}
  ${Map}            | ${"function"}
  ${RegExp}         | ${"function"}
  ${new Date()}     | ${"date"}
  ${new Map()}      | ${"map"}
  ${new RegExp("")} | ${"regexp"}
  `
  (`指定された変数の型文字列が返されること`, ({param, result}) => {
    test(`toTypeString(${param? param.toString() : param})`, () => {
      expect(toTypeString(param)).toBe(result);
    })
  })
  
});
