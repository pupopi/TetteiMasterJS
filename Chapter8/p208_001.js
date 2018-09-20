// カリー化の例

var pow = function(exponent) {
    return function(base) {
        return Math.pow(base,exponent);
    };
};

// カリー化した結果
// Math.pow(base, exponent) = pow(exponent)(base)

var square = pow(2);
var sqrt = pow(.5);
var cubicroot = pow(1/3);