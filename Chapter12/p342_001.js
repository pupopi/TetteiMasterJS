// lastIndexプロパティ

// マッチした文字列の勅所の文字位置を、lastIndexプロパティに記録

var tel = /(\d{2,5})-(\d{1,4})-(\d{4})/g;
var text = "Tom: 010-1234-5678\nHuck: 020-550-7809\nBecky: 030-4321-9876";
console.log(tel.lastIndex);     // → 0
console.log(tel.exec(text));    // → ["010-1234-5678", "010", "1234", "5678"]
console.log(tel.lastIndex);     // → 18