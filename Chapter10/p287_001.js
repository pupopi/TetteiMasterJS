// ECMAScript6: 配列の分割代入

var [a, b] = [1, 2];        // var a=1, b=2と同じ
[a, b, c] = [1, 2];         // a=1, b=2, c=undefinedと同じ
[,a,,b] = [1, 2, 3, 4];     // a=2, b=4と同じ