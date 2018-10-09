// 例外の伝播

try {
    f();
} catch(e) {
    console.log("例外をキャッチ → " + e)
}
function f() { g(); }
function f() { h(); }
function f() { throw new Error("エラーが発生しました") }