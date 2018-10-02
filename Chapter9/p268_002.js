// オブジェクトリテラルの拡張：メソッド定義の略記

var person = {
    name: "Tom",
    sayHello() { console.log("Hello! " + this.name); }
};
person.sayHello();      // → "Hello! Tom"