// 多次元配列の生成

// 3次元配列を生成する
var x = new Array(3);               // 右辺を配列リテラルで[]としてもよい
for(var i=0; i<3; i++) {   
    x[i] = new Array(3);            // 右辺を配列リテラルで[]としてもよい
    for(var j=0; j<3; j++) {
        x[i][j] = new Array(3);     // 右辺を配列リテラルで[]としてもよい
    }
}
// 3次元配列に値を代入する
for(var count=1, i=0; i<3; i++) {
    for(var j=0; j<3; j++) {
        x[i][j] = count++;
    }
}