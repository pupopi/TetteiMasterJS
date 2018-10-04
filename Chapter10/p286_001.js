// 配列のようなオブジェクト

// 配列のようなオブジェクトを生成して値を代入する
var a = {}
for(var i=0; i<10; i++) {
    a[i] = i;
}
a.length = 10;
// 配列のようなオブジェクトの要素の和を求める
for(var i=0, sum=0; i<a.length; i++) sum += a[i];
console.log(sum);   // → 45