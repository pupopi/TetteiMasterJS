// イベントリスナ内のthis

function Person(name) {
    this.name = name;
};
Person.prototype.sayHello = function() {
    console.log("Hello! " + this.name);
}
var person = new Person("Tom");
var button = document.getElementById("button");
button.addEventListener("click", person.sayHello, false);