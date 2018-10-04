// ECMAScript6:型付き配列のコピー

var a = new Int16Array(10);
for(var i=0; i<10; i++) a[i] = i;
var b = new Int16Array(a)       // aを引数に渡すと、bにaのコピーが代入される
console.log(b);                 // → [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log( a === b );         // → false:aとbは異なる配列