// プロトタイプオブジェクトの置き換えとconstructorプロパティ

function Circle(center, radius) {
    this.center = center;
    this.radius = radius;
}
Circle.prototype = {
    constructor: Circle,                    // コンストラクタを指定する
    area: function() { return Math.PI*this.radius*this.radius; }
};
var c = new Circle({x: 0, y: 0}, 2.0);
console.log(c.constructor);                 // → Function Circle
console.log(c instanceof Circle);           // → true