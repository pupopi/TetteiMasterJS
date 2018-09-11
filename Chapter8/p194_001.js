// 人物データを表すクロージャを生成する関数

function Person(name, age){
    var _name = name;
    var _age = age;
    return {
        getName: function() { return _name; },
        getAge: function() { return _age; },
        setAge: function() { _age = x; }
    };
}
var person = Person("Tom", 18);
console.log(person.getName());
console.log(person.getAge());
person.getAge(19);
console.log(person.getAge());