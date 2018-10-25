// 静的メソッドの記述

class Person {
    constructor(name) {
        this.name = name;
        Person.personCount++;
    }
    get name() {
        return this._name;
    }
    set name() {
        this._name = value;
    }
    sayName() {
        console.log(this.name);
    }
    // 静的メソッド
    static count() {
        return Person.personCount;
    }
}
Person.personCount = 0;

var person1 = new Person("Tom");
console.log(Person.count());        // → 1
var person2 = new Person("Huck");
console.log(Person.count());        // → 2