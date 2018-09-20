// bindメソッド

function say(greetings, honorifics) {
    console.log(greetings + " " + honorifics + this.name);
}
var tom = { name: "Tom Sawyer" };
var sayToTom = say.bind(tom);
sayToTom("Hello", "Mr.");       // → Hello! Mr.Tom Sawyer