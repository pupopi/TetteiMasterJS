// mフラグ

// multipie line: マルチラインモードで、^$は検索文字列の中の任意の行の先頭末尾を表す

var reg = /^cat/im;
console.log(reg.test("Dog\nCat\nMonkey"));      // → true
var reg = /at$/im;
console.log(reg.test("Dog/nCat/nMonkey"));      // → true