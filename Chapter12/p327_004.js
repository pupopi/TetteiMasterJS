// 文字クラス略記号：空白文字と空白文字以外「\s」「\S」

// 任意の空白文字(半角空白、タブ、改行など)

console.log(/\s\w\w/.exec("JavaScript RegExp"));        // → [" Re"]:" Re"にマッチ
console.log(/\s\w\w/.exec("JavaScriptRegExp"));         // → null