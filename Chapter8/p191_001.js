// カウンタ関数を作る関数

function makeCounter(){ // 無名関数
    var count = 0;
    return f;
    function f(){   // 無名関数がクロージャ
        return count++;　// スコープチェーンにより外側からcountを参照
    }
}
var counter = makeCounter();
console.log(counter());
console.log(counter());
console.log(counter());