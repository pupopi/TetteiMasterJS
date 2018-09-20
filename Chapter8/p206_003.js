// 複数の引数に対応した、関数を合成する関数

function compose(f, g) {
    return function() {
        return f.call(this, g.apply(this, arguments));
    }
}