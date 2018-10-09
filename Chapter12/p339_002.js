// 文字列の抽出：matchメソッド

// 第一引数に指定された正規表現を、マッチした順番に格納(元の配列を変更しない)

var url = /\b(\w+):\/{2}([\w.]+)\/(\S*)\b/;
var text = "TomのページのURLは、http://www.example.com/-tomです。";
console.log(text.match(url));
// →  ["http://www.example.com/-tom", "http", "www.example.com", "-tom"]