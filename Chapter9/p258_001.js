// 拡張防止：Object.preventExtensionsメソッド

var person = { name: "Tom" };
Object.preventExtensions(person);
person.age = 17;
console.log("age" in person);   // → false