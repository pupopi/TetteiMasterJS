/* 引数の値渡しと参照渡し
 　引数がミリティブ*/

 
function add1(x) { return x = x+1; }
var a = 3;
var b = add1(a);
console.log("a = " + a , " b = " + b);