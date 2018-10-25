// スーパータイプのメソッドの利用

/* Ellipseコンストラクタの定義を、ここに記述します */
function Ellipse(a, b) {
    this.a = a;     // 長軸方向の半径
    this.b = b;     // 短軸方向の半径
}

/* Circleコンストラクタの定義を、ここに記述します */
function Circle(r) {
    this.a = r;
    this.b = r;
}

/* Circle.prototypeの定義を、ここに記述します */
Circle.prototype = Object.create(Ellipse.prototype, {
    constructor: {
        configurable: true,
        enumerable: true,
        value: Circle,
        writable: true
    }
});

// スーパータイプのtoStringメソッドを利用して、Circle.prototype.toStringを定義
Circle.prototype.toString = function() {
    var str = Ellipse.prototype.toString.call(this);
    return str.replace("Ellipse", "Circle");
};

var circle = new Circle(2);
console.log(circle.getArea());      // → 12.566370614359172
console.log(circle.toString());     // → Circle 2 2