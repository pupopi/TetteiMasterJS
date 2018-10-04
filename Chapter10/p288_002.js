// ECMAScript6:オブジェクトの分割代入

var {a: x, b: y} = {a: 1, b: 2};    // → x=1, y=2と同じ
{a: x, b: y} = {a: 1, c: 2};        // → x=1, y=undefinedと同じ