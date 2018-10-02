// Object.createの第2引数

var group = {
    groupName: "Tennis circle",
    sayGroupName: function() { console.log("belong to " + this.groupName); }
};
var person = Object.create(group,{
    name: {
        value: "Tom",
        writable: true,
        enumerable: true,
        configurable: true
    },
    age: {
        value: 18,
        writable: true,
        enumerable: true,
        configurable: true
    },
    sayName: {
        value: function() { console.log("I'm " + this.name ); },
        writable: true,
        enumerable: false,
        configurable: true
    }
});
console.log(person);            // → Object {name: "Tom", age: 18, sayName: ƒ}
console.log(person.groupName);  // → Tennis circle
person.sayGroupName();          // → belong to Tennis circle
person.sayName();               // → I'm Tom