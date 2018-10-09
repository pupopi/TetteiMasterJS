// RegExpオブジェクトのメソッド

var reg = /cat/;
console.log(reg.test("cats and dogs"));     // → true
console.log(reg.test("Cat"));               // → false

// マッチした文字列を配列で返す(なければnull)
var reg = /Script/;
var result = reg.exec("JavaScript");
console.log(result[0]);                     // → "Script"

// indexは最初にマッチした位置、inputは対象となった文字列
console.log(result.index);                  // → 4
console.log(result.input);                  // → "JavaScript"   