// 再定義可の設定を変更する

var person = { name: "Tom", age: 17, sex: "男" };
Object.defineProperty(person, "age", {configurable: false});
delete person.age;
console.log(person.age)     // → 17
Object.defineProperty(person, "age", {enumerable: false});
// → Uncaught TypeError: Cannot redefine property: age
Object.defineProperty(person, "age", {writable: false});