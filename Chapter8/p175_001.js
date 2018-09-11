// nの階乗を計算する再帰関数

function fact(n) {
    if ( n <= 1 ) return 1;
    return n*fact(n-1);
}
fact(5);