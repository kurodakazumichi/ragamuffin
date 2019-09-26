import { toTypeString } from '../toTypeString';

/**
 * 指定された変数が純粋なobjectかどうかを判定する
 * @param a is any variant.
 */
export function isObject(a:any) 
{
  const isObject = (toTypeString(a) === "object");

  if(!isObject) return false;
  if(a.constructor.name !== "Object") return false;
  
  return true;
}