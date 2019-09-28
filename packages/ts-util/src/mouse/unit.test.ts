import * as mouse from './index';


//=============================================================================
// Test
//=============================================================================
describe("mouse", () => {

  describe.each`
  param  | result
  ${0}   | ${true}
  ${1}   | ${false}
  ${2}   | ${false}
  `
  (`マウスの左ボタンが押された判定のテスト`, ({param, result}) => {
    test(`isPressedLeft(${param}) is ${result}`, () => {
      expect(mouse.isPressedLeft(param)).toBe(result);
    })
  })

  describe.each`
  param  | result
  ${0}   | ${false}
  ${1}   | ${true}
  ${2}   | ${false}
  `
  (`マウスの中央ボタンが押された判定のテスト`, ({param, result}) => {
    test(`isPressedCenter(${param}) is ${result}`, () => {
      expect(mouse.isPressedCenter(param)).toBe(result);
    })
  })

  describe.each`
  param  | result
  ${0}   | ${false}
  ${1}   | ${false}
  ${2}   | ${true}
  `
  (`マウスの右ボタンが押された判定のテスト`, ({param, result}) => {
    test(`isPressedRight(${param}) is ${result}`, () => {
      expect(mouse.isPressedRight(param)).toBe(result);
    })
  })
  
  describe.each`
  button | checkType  | result
  ${0}   | ${mouse.Button.Left}   | ${true}
  ${0}   | ${mouse.Button.Center} | ${false}
  ${0}   | ${mouse.Button.Right}  | ${false}
  ${1}   | ${mouse.Button.Left}   | ${false}
  ${1}   | ${mouse.Button.Center} | ${true}
  ${1}   | ${mouse.Button.Right}  | ${false}
  ${2}   | ${mouse.Button.Left}   | ${false}
  ${2}   | ${mouse.Button.Center} | ${false}
  ${2}   | ${mouse.Button.Right}  | ${true}
  `
  (`マウスのボタンと指定したボタンタイプが一致するかの判定のテスト`, ({button, checkType, result}) => {
    test(`isPressedRight(${button}, ${checkType}) is ${result}`, () => {
      expect(mouse.isPressed(button, checkType)).toBe(result);
    })
  })

});
