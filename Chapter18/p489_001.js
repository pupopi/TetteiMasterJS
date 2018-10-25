// コンストラクタの借用

/* Ellipseコンストラクタの定義を、ここに記述します */
function Circle(r) {
    // Ellispeコンストラクタを借用して、プロパティを定義します
    Ellipse.call(this, r, r);
    // ここに、新たなプロパティや既存のプロパティのオーバーライドを記述できます
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
