/* 引数の値渡しと参照渡し
 　引数がオブジェクト.*/

function add1(p){ p.x = p.x + 1; p.y = p.y + 1; return p;}

var a = {x:3,y:4};
var b = add1(a);
console.log(a, b);
