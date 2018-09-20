// 関数を合成する関数

function compose(f, g) {
    return function(x) {
        return f(g(x));
    }
}