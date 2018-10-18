// thenの第二引数

// promise.then(onFullfilled, onRejected);


promise.then(
    // 正常終了時のコールバック関数
    function(num) {
        console.log('2^${num} = ${Math.pow(2, num)}');
    },
    // エラー終了時のコールバック関数
    function(error) {
        console.log(error);
    }
);