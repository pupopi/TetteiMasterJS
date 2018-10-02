// 反復可能なオブジェクトのイテレータ

var a = ["A", "B", "C"];
for(var v of a) console.log(v);     // "A","B","C"を順に表示
var iter = a[Symbol.iterator]();
for(var v of iter) console.log(v);  // "A","B","C"を順に表示、イテレータでも可
var iter_iter = iter[Symbol.iterator]();
console.log(iter_iter === iter);    // →true
