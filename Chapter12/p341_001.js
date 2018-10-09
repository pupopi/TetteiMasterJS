// execメソッドの戻り値

var tel = /(\d{2,5})-(\d{1,4})-(\d{4})/;
var text = "Tom: 010-1234-5678";
var result = tel.exec(text);
console.log(result);    // → ["010-1234-5678", "010", "1234", "5678"]

result.index;       // → 5
result.input;       // → "Tom: 010-1234-5678"