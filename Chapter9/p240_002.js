// instanceof演算子

function F() {};
var obj = new F();
console.log(obj instanceof F);      // → true
console.log(obj instanceof Object); // → true
console.log(obj instanceof Date);   // → false

// インスタンスがコンストラクタのプロトタイプオブジェクトを継承しているか判定