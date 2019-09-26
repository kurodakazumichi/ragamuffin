import { isNumber } from '../isNumber';

/** enum を key value objectに変換する*/
export function enum2StringKeyObject<T>(e:T) : {[key:string]:string} {
  const objs:{[key:string]:string} = {};

  Object.entries(e).forEach(([key, value]) => {
    console.log(typeof key, typeof value);
    if (key === "displayName") return;
    if (key === "__docgenInfo") return;
    if (isNumber(Number(key))) return;
    objs[key] = value;
  });

  return objs;
}
