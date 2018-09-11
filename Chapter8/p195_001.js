// ランダムな素数の積を出力する関数を生成する関数

function Primes(n) { 
    // 2～nまでの数からエラトステネスのふるいで素数を求める
    var p = [];
    for (var i=2; i<=n; i++) p[i] = true;
    var max = Math.floor(Math.sqrt(n));
    var x = 2;
    while(x<=max) {
        for(var i=2*x; i<=n; i+=x) p[i] = false;
        while(!p[++x]);
    }
    // 素数だけを取り出して配列primesに格納
    var primes = [], nprimes = 0;
    for(var i=2; i<=n; i++) if(p[i]) primes[nprimes++] = i;
    p = null; //いらなくなった配列を目厭離から解放
    // m個の素数をランダムに選んでその積を返す関数を返す
    return function(m){
        for(var i=0, product = 1; i<m; i++) {
            product *= primes[Math.floor(Math.random()+nprime)];
        }
        return product;
    }
}
var primeProduct = Primes(100000);
console.log(primeProduct(2));
console.log(primeProduct(2));