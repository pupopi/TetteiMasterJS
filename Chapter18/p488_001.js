// コンストラクタのprototypeの継承

function Circle(r) {
    this.a = r;
    this.b = r;
}

Circle.prototype = Object.create(Ellipse.prototype, {
    constructor: {
        configurable: true,
        enumerable: true,
        value: Circle,
        writable: true
    }
});

Circle.prototype.toString = function() {
    return "Circle " + this.a + " " + this.b;
};

var circle = new Circle(2);

console.log(circle.getArea());      // → 12.566370614359172
console.log(circle.toString());     // → Circle 2 2