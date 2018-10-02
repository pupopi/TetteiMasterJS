// インスタンス生成後のプロトタイプへの追加とプロトタイプの置き換え

function Circle(center, radius) {
    this.center = center;
    this.radius = radius;
}
var c = new Circle({x: 0, y: 0}, 2.0);
Circle.prototype.area = function() {
    return Math.PI*this.radius*this.radius;
};
c.area();       // → 12.566370614359172