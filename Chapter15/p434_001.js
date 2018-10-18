// Promise.raceメソッド

// Promise.race(iterable);
// 複数の非同期処理を並列実行させ、最初に処理終了したものの結果のみを出力(エラーでも)

function buyAsync(name, mymoney) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            var payment = parseInt(prompt('${name}さん、支払金額を入力してください'));
            var balance = mymoney -payment;
            if( balance > 0 ) {
                console.log('${name}: ${payment}円を支払いました');
                resolve(balance);
            } else {
                reject('${name}: 残金は${mymoney}円です。購入できません');
            }
        }, 1000);
    });
}
Promise.race([
    buyAsync("Tom", 500),
    buyAsync("Huck", 600),
    buyAsync("Becky", 1000)
])
.then(function(balance) {
    console.log(balance);
})
.catch(function(error) {
    console.log(error);
});

// → Tom: 200円を支払いました。
//      300(成功コールバック関数の出力)
//      Becky: 300円を支払いました。
//      Huck: 400円を支払いました。