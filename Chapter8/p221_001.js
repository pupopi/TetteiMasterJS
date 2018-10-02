// ジェネレータを終了する：returnメソッド

function* g() {
    yield 1;
    yield 2;
    yield 3;
}
var iter = g();
g.next();           // → Object {value: 1, done: false}
g.return(10);       // → Object {value: 10, done: true}
g.next();           // → Object {value: underfined, dont:true}

// returnの引数でジェネレータは最終終了する
