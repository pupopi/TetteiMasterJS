// hasOwnPropertyメソッド

var person = { name: "Tom" };
console.log(person.hasOwnProperty("name"));          // → true: 独自プロパティ
console.log(person.hasOwnProperty("toString"));      // → false: 継承プロパティ