// 配列の要素の文字列をキーとし、文字列の長さを値とするオブジェクト

var a = ["Tom", "Huck", "Becky"];
a.reduce(function(p, v) { p[v] = v.length; return p }, {} );
// → {Tom: 3, Huck: 4, Becky: 5}