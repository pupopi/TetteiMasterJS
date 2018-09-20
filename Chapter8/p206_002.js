// 関数を合成する関数の例

var square = function(x) { return x*x; };
var add1 = function(x) { return x+1; }
var h = compose(square, add1);  // h(x)=(x+1)*(x+1)
console.log(h(2));              // → 9