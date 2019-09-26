import { isNumber } from '../isNumber';

/**
 * enumをjsonに変換する。
 * @param e is any enum.
 */
export function enum2StringKeyObject<T>(e:T) : {[key:string]:string} 
{
  const objs:{[key:string]:string} = {};

  if(!(Object.prototype.toString.call(e).slice(8, -1).toLowerCase() === "object")) {
    return objs;
  }

  // デフォルトでenumに含まれる無視したいプロパティ
  const ignores = [
    "displayName", "__docgenInfo"
  ];

  Object.entries(e).forEach(([key, value]) => 
  {
    if (!ignores.indexOf(key)) return;
    if (isNumber(Number(key))) return;
    objs[key] = value;
  });

  return objs;
}
