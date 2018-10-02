// オブジェクトリテラルの拡張：ジェネレータ定義の略記

var obj = {
    * range(n) { for(var i=0; i<n; i++) yield i; }
};
var it = obj.range(10);
console.log(it.next().value);   // → 0
console.log(it.next().value);   // → 1
console.log(it.next().value);   // → 2