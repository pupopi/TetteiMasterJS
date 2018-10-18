// ECMAScript6:Promiseの基本

// var promise = new Promise(function(resolve, reject){...});
// resolve = 関数の処理が正常に終了したときに呼ぶコールバック関数。引数は次の処理を行う関数に渡す。
// reject = 関数の処理が失敗したときに呼ぶコールバック関数。引数は、多くの場合エラーメッセージ文字列。

var promise = new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log("A");
        resolve();
    }, 1000);
});
promise.then(function() {
    console.log("B");
});