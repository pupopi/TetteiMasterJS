// ECMAScript:反復可能なオブジェクトの分割代入

var [a, b, c] = "ABC";      // → var a="A", b="B", c="C"と同じ
function* createNumbers(from, to) {
    while( from <= to ) yield from++;
}
var [a, b, c, d, e] = createNumbers(10, 15);
// a=10, b=11, c=12, d=13, e=14と同じ