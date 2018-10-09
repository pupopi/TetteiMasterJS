// iフラグ

// case-insensitive: 大文字と小文字を区別せずにマッチング
console.log(/\bcat\b/i.test("I like Cat"));     // → true
console.log(/\bcat\b/i.test("I like CAT"));     // → true