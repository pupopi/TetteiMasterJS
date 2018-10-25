// コンストラクタの継承：プロトタイプ継承の復習

function Ellipse(a, b) {
    this.a = a;     // 長軸方向の半径
    this.b = b;     // 短軸方向の半径
}
// 楕円の面積を計算するメソッド
Ellipse.prototype.getArea = function() {
    return Math.PI*this.a*this.b;
};
// Object.prototype.toStringうぃオーバーライド
Ellipse.prototype.toString = function() {
    return "Ellipse" + this.a + " " + this.b;
};