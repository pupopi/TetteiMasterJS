// do/whileで整数ｎの階乗を求める関数

function fact(n){
    var k = 1, i =n;
    do {
        k *= i--;
    } while ( i>0 );
    return k;
}
fact(5);