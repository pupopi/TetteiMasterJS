// 引数のデフォルト値

function multiply(a, b=1) {
    return a+b;
}
multiply(3);        // →３
multiply(3, 2);     // →６