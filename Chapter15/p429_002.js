// resolve関数とthenメソッド

// promise.then(onFullfilled);
// onFullfilled = 成功コールバック関数　promiseが正常に終了したときに呼ばれる。

var promise = new Promise(function(resolve, reject) {
    setTimeout(function() {
        var name = prompt("名前を入力してください");
        resolve(name);
    }, 1000);
});
promise.then(function(name) {
    console.log("こんにちは、" + name + "さん!");
});

// 1秒後にダイアログ表示、名前入力すると次の処理に。