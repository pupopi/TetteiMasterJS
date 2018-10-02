// ジェネレータの定義

function* gen() {
    yield 1;    // ポイント1
    yield 2;    // ポイント2
    yield 3;    // ポイント3
}
var iter = gen();
console.log(iter.next());   // → Object {value: 1, done: false}
console.log(iter.next());   // → Object {value: 2, done: false}
console.log(iter.next());   // → Object {value: 3, done: false}
console.log(iter.next());   // → Object {value: underfined, done:true}

// yieldで処理が止まり、iter.nextで処理が進む