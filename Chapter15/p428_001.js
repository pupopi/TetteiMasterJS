// ECMAScript6:Promiseを使わない非同期処理

function sleep(callback) {
    setTimeout(function() {
        callback();
    }, 1000);
}
sleep(function() {
    console.log("A");
    sleep(function() {
        console.log("B");
        sleep(function() {
            console.log("C");
        });
    });
});

// A, B, Cの順に表示
// sleep = callbackを1秒後に実行する非同期処理関数
// Promiseができるまで、このように入れ子式のコールバック地獄だった