// 文字クラス略記号：単語文字と単語文字以外:「\w」「\W」

console.log(/\w/.test("A"));        // → true
console.log(/\w/.test("!@#&%-1"));  // → false