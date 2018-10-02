//オブジェクトリテラルの拡張：算出プロパティ名

var prop = "name", i = 1;
var obj = { [prop+i]: "Tom" };
console.log(obj);       // → Object {name1: "Tom"}
var obj = { [Symbol("heart")]: "A" };
console.log(obj);       // → Object{Symbol(heart): "A"}