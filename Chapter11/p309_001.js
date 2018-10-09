// Strictモードの設定

function f(x) {
    "use strict";
    y = x;
}
f(2);
// → Uncaught ReferenceError: y is not defined(...)