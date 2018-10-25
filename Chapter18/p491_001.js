// ECMAScript6:クラス構文の基本

// クラス宣言文を用いて

class Circle {
    // コンストラクタによる初期化
    constructor(center, radius) {
        this.center = center;
        this.radius = radius;
    }
    // prototypeのメソッド
    area() {
        return Math.PI*this.radius*this.radius;
    }
}

var c = new Circle({x: 0, y: 0}, 2);
console.log(c.area());      // → 12.566370614359172