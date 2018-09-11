// 変数の名前解決：スコープチェーン

var a = "A";
function f(){
    vat b = "B";
    function g(){
        var c = "C";
        console.log(a+b+c);
    }
    g();
}
f();