// 非同期処理でのコールバック関数内の例外

try {
    setTimeout(function throwError() {
        throw new Error("エラーが発生しました");
    }, 1000);
} catch(e) {
    console.log("例外をキャッチ → " + e);
}