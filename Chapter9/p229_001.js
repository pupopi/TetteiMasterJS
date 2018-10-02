// Circle.prototypeの生成

// Circleコンストラクタ
function Circle(center, radius) {
    this.center = center;
    this.radius = radius;
}
// Circleコンストラクタのprototypeプロパティにareaメソッドを追加する
Circle.prototype.area = function() {
    return Math.PI*this.radius*this.radius;
};
// Circleコンストラクタからインスタンスを生成する
var c1 = new Circle({x: 0, y: 0}, 2.0);
var c2 = new Circle({x: 0, y: 1}, 3.0);
var c3 = new Circle({x: 1, y: 0}, 1.0);
console.log("面積 = " + c1.area());     // → 面積 = 12.566370614359172