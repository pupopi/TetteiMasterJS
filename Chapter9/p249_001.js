// データのカプセル化

var person = (function() {
    var _name = "Tom";              // プライベート変数
    return {
        get name() {
            return _name;
        },
        set name(value) {
            var str = value.charAt(0).toUpperCase() + value.substring(1);
            _name = str;
        }
    };
})();
console.log(person.name);           // → Tom
person.name = "huck";               // アクセッサプロパティに値を代入する
console.log(person.name);           // → Huck