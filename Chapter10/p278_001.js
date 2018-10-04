// toEachメソッド

var a = [1, 2, 3, 4, 5];
//配列の和を求める
var sum = 0;
a.forEach(function(value) { sum += value; } );
console.log(sum);       // → 15
// 配列要素の各々を自乗する
a.forEach(function(v, i, a) { a[i] = v*v; } );
console.log(a);         // → [1, 4, 9, 16, 25]