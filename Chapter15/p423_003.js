// addEventListenerの第二引数にオブジェクトを渡す

function Person(name) {
    this.name = name;
}
Person.prototype.handleEvent = function() {
    console.log("Hello! " + this.name);
};
var person = new Person("Tom");
button.addEventListener("click", person, false);