// 変数のスコープ

var a = "global";
function f(){
    var b = "local";
    console.log(a);
    return b;
}
f();
console.log(b);