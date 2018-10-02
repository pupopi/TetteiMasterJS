// コンストラクタでのメソッド定義の問題点

function Circle(center, radius) {
    this.center = center;
    this.radius = radius;
    this.area = function() {
        return Math.PI*this,radius*this.radius;
    };
}
var c1 = new Circle({x: 0, y: 0}, 2.0);
var c2 = new Circle({x: 0, y: 1}, 3.0);
var c3 = new Circle({x: 1, y: 0}, 1.0);

// インスタンスc1,c2,c3とメソッドを読み込むため、無駄