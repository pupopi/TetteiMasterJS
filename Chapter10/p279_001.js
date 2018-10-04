// オブジェクトの特定のプロパティ値を取り出した配列

var persons = [
    {name: "Tom", age: 17},
    {name: "Huck", age: 18},
    {name: "Becky", age: 16}
];
var names = persons.map(person => person.name);
var ages = persons.map(person => person.age);
console.log(names);     // → ["Tom", "Huck", "Becky"]
console.log(ages);      // → [17, 18, 16]