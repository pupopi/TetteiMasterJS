// ECMAScript6:全データの列挙

var zip = new Map([["Tom", "131-8634"], ["Huck", "556-0002"]]);
var iter = zip.entries();
for(var v of iter) console.log(v);
// ["Tom", "131-8634"], ["Huck", "556-0002"]と順に出力

// 分割代入でよりシンプルに
var zip = new Map([["Tom", "131-8634"], ["Huck", "556-0002"]]);
for(var [key, value] of zip) console.log(key, value);
// Tom 131-8654, Huck 556-0002と順に出力