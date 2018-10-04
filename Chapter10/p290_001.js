// ECMAScript6:入れ子のデータ構造の分割代入

var [a, [b, c]] = [1, [2, 3]];      // var a=1, b=2, c=3と同じ
var {a: x, b: {c: y, d: z}} = {a: 1, b: {c: 2, d: 3}};
// var x=1, y=2, z=3と同じ
var person = {name: "Tom", age: 17, hobby: {"Tennis", "Music"}};
var {name, age, hobby:[hobby1]} = person;
// var name = "Tom", age = 17, hobby1 = "Tennis"と同じ