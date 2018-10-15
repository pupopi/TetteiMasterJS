// オブジェクトにthisを設定:無名関数の中で実行

function Person(name) {
    this.name = name;
};
Person.prototype.sayHello = function() {
    console.log("Hello! " + this.name);
}
var person = new Person("Tom");
var button = document.getElementById("button");
// 無名関数
button.addEventListener("click", function(e) {
    person.sayHello();
}. false);