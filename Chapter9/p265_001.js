// プロパティ名としてのシンボル

var obj = {};
var s = Symbol("heart");
obj[s] = 3;
console.log(obj);       // → Object {Symbol(heart); 3}