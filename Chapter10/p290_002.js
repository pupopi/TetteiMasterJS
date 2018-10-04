// ECMAScript6:展開演算子

// 「...」のこと
[..."ABC"]                  // → ["A", "B", "C"]
f(..."ABC")                 // → f("A", "B", "C")と同じ

// 反復可能イレテータを配列リテラル中で展開

function* createNumbers(from, to) {
    while( from <= to ) yield from++;
}
var iter = createNumbers(10, 15);
[...iter]                   // → [10, 11, 12, 13, 14, 15]