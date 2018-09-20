// アロー関数：arguments変数を持たない

var f = () => console.log(arguments);
f();    // → ReferenceError: arguments is not defined