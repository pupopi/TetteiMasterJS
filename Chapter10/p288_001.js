// ECMAScript6:関数の配列の戻り値を分割代入で受ける

// 2次元座標点(x, y)を原点の周りに角度thetaだけ開店する
function rotation(x, y, theta) {
    var s = Math.sin(theta), c = Math.cos(theta);
    return [c*x - s*y, s*x + c*y];
}
var [a, b] = rotation(1, 2, Math.PI/3);