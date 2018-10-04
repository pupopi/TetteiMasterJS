// Set:全データ値の列挙

var zip = new Set(["131-8634", "556-0002"]);
var iter = zip.keys();
for(var of iter) console.log(v);    // 131-8654, 556-0002と順に出力

var zip = new Set(["131-8634", "556-0002"]);
for(var v of zip) console.log(v);
// 131-8654, 556-0002と順に出力