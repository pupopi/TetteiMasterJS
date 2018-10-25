// ECMAScript6:クラス構文の基本その２

// クラス式で定義
var Circle = class {
    // コンストラクタによる初期化
    constructor(center, radius) {
        this.center = center;
        this.radius = radius;
    }
    // prototypeのメソッド
    area() {
        return Math.PI*this.radius*this.radius;
    }
};