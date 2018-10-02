// プロトタイプの取得

function F(){}
var obj = new F();
console.log(Object.getPrototypeOf(obj));        // → Object{}