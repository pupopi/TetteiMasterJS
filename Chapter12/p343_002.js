// ECMAScript6:yフラグ

// 先頭固定検索

var text = "1 little, 2 little, 3 little indian";
var reg = /\d+ little/y;
console.log(reg.sticky);                // → true
reg.lastIndex = 10;
console.log(reg.exec(text));            // → ["2 little"]
console.log(reg,lastIndex);             // → 18
reg.lastIndex = 9;
console.log(reg.exec(text));            // → null
console.log(reg.lastIndex);             // → 0