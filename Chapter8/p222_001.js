// 反復可能なオブジェクトへの委任：yield*

function* f() {
    yield "X";
    yield "Y";
}
function* g() {
    yield 0;
    yield* [2,4];
    yield* "AB";
    yield* f();
}
var iter = g();
for(var v of iter) console.log(v);  //0,2,4,A,B,X,Yを順に出力

// yield*に反復可能なオブジェクト（２，４なら二つに分かれて出力できる）