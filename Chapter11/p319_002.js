// 非同期処理を含んでも例外をキャッチして関数を実行する

// テスト用の関数(第一引数にジェネレータへの参照を持つ)
function sleepAnError(g, n) {
    setTimeout(function() {
        for(var i=0; i<n; i++) console.log(i);       // do something
        g.throw(new Error("エラーが起こりました"));
    }, 1000);
}
// callback関数を実行する関数:callback関数が非同期処理を含んでも例外をキャッチする
function run(callback, ...argsList) {
    var g = (function* (cb, args) {
        try {
            yield cb(g, ...args);
        } catch(e) {
            console.log("例外をキャッチ -> " + e);
        }
    })(callback, argsList);
    g.next();
}
// 実行してみる
run(sleepAnError, 10);
// → 0～9を順に表示
// 例外をキャッチ -> Error: エラーが起こりました