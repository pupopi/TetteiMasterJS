// フィボナッチ数列を作る関数をメモ化

var fibonacci = memorize(function(n){
    if(n<2) return n;
    return fibonacci(n-1) + fibonacci(n-2);
});
for(var i=0; i<=20; i++) {
    console.log((" "+i).slice(-2)+":"+fibonacci(i));
}