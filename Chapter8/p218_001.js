// mからnまでの整数値を順に取り出すイテレータを生成するジェネレータ

function* createNumbers(from, to){
    while( from <= to ) yield from++ ;
}
var iter = createNumbers(10, 20);
for(var v of iter) console.log(v);  //10から20ｍ￥の整数を順に出力