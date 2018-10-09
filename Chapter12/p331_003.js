// 文字列の末尾マッチ「$」

var jsLast = /JavaScript$/;
console.log(jsLast.test("JavaScript is powerful"));     // → false
console.log(jsLast.test("I love JavaScript"));          // → true