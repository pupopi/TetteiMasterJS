// 置換パターン3:名前の姓と名の入れ替え

var name = "Tom Sawyer";
var result = name.replace(/(\w+)\s(\w+)/, "$2 $1");
console.log(result);        // → Sawyer Tom