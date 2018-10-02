// 書き込み可の設定を変更する

var person = { name: "Tom" };
Object.defineProperty(person, "name", {
    writable: false,
});
Object.getOwnPropertyDescriptor(person, "name");
// → {value: "Tom", writable: false, enumerable: true, configurable: true}
person.name = "Huck";
console.log(person.name);   // → Tom