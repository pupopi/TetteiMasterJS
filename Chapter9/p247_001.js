// アクセッサプロパティ

var person = {
    _name: "Tom",
    get name() {
        return this._name;
    },
    set name(value) {
        var str = value.charAt(0).toUpperCase() + value.substring(1);
        this._name = str;
    }
};
console.log(person.name);       // → Tom
person.name = "huck";           // → アクセッサプロパティに値を代入する
console.log(person.name);       // → Huck