// 関数ファクトリ

function makeMultiplier(x) {
    return function(y) {
        return x*y;
    };
}
var multi2 = makeMultiplier(2);
var mukti10 = makeMultiplier(10);
console.log(multi2(3));
console.log(multi10(3));