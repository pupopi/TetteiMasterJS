// アロー分：コンストラクタとしては利用できない

var Person = (name, age) => { this.name = name; this.age = age; };
var tom = new Person("Tom", 17);    // → Type Error