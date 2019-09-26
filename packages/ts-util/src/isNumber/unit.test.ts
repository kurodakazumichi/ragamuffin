import { isNumber } from './index';

describe("isNumber", () => {

  describe.each`
    param       | result
    ${0}        | ${true}
    ${10}       | ${true}
    ${0.0}      | ${true}
    ${"0"}      | ${false}
    ${"10"}     | ${false}
    ${"0.0"}    | ${false}
    ${Infinity} | ${false}
    ${NaN}      | ${false}
    ${true}     | ${false}
  `("数値以外はfalseになることを確認", ({param, result}) => {


    it(`isNumber(${param}) is ${result}`, () => {
      expect(isNumber(param)).toBe(result);
    })
  })
  
})