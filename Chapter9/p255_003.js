// propertyISEnumerableメソッド

// 独自プロパティかつ列挙可能でtrue

var person1 = { name: "Tom", age: 17 };
var person2 = Object.create(person1);
person2.name = "Huck";
console.log(person2.propertyIsEnumerable("name"));                  // → true: 独自プロパティ
console.log(person2, propertyIsEnumerable("age"));                  // → false: 継承プロパティ
console.log(Object.prototype.propertyIsEnumerable("toString"));     // → false: 列挙可能でない