// isPrototypeOfメソッド

// オブジェクトが別のオブジェクトのプロトタイプチェーンに含まれるかどうか判定

function F() {};
var obj = new F();
console.log(F.prototype.isPrototypeOf(obj));        // → true
console.log(Object.prototype.isPrototypeOf(obj));   // → true
console.log(Date.prototype.isPrototypeOf(obj));     // → false