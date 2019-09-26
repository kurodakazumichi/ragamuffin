/**
 * 指定された変数の型文字列を返す。
 * @param a is any variant.
 */
export function toTypeString(a:any) {
  return Object.prototype.toString.call(a).slice(8, -1).toLowerCase();
}