// for/in文でプロパティ列挙

var person1 = { name: "Tom", age: 17 };
var person2 = Object.create(person1);
person2.name = "Huck";
for(var p in person2) console.log(p);       // name.ageと順に表示される
