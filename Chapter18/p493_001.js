// アクセッサの記述をクラス構文で

class Person {
    // コンストラクタによる初期化
    constructor(name) {
        this.name = name;
    }
    // prototypeのメソッド
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    sayName() {
        console.log(this.name);
    }
}

var person = new Person("Tom");
console.log(person.name);       // → Tom
person.name = "Huck";
console.log(person.name);       // → Huck
person.sayName();               // → Huck