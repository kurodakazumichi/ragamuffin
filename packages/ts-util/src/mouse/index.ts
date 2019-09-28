export enum Button {
  Left   = 0,
  Center = 1,
  Right  = 2,
}

export function isPressed(pressType:number, checkType:Button) {
  return (pressType === checkType);
}

export function isPressedLeft(button:number) {
  return isPressed(button, Button.Left);
}

export function isPressedCenter(button:number) {
  return isPressed(button, Button.Center);
}

export function isPressedRight(button:number) {
  return isPressed(button, Button.Right);
}