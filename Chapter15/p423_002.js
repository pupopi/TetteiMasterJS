// オブジェクトにthisを設定:アロー関数

function Person(name) {
    this.name = name;
    this.sayHello = () => {
        console.log("Hello! " + this.name);
    };
}
var person = new Person("Tom");
var button = document.getElementById("button");
button.addEventListener("click", person.sayHello, false);