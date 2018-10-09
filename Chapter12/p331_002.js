// 文字列の先頭マッチ「^」

var jsFirst = /^JavaScript/;
console.log(jsFirst.test("JavaScript is powerful"));    // → true
console.log(jsFirst.test("I love Javascript"));         // → false