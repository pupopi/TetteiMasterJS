// replaceメソッド

// 第一引数の文字列を、第二引数の文字列で置換
var s = "1 little, 2 little indian";
console.log(s.replace(/indian/,"boy"));         // → 1 little, 2 little boy
console.log(s.replace(/little/,"big"));         // → 1 big, 2 little indian
console.log(s.replace(/little/g,"big"));        // → 1 big, 2 big indian