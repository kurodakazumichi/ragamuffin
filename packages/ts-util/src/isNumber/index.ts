/** 数値かどうかを判定する */
export function isNumber(a:any) {
  return ((typeof a === 'number') && (isFinite(a)));
}