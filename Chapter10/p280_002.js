// reduceメソッド：配列の要素の積と最大値

var a = [1, 2, 3, 4, 5];
a.reduce(function(p, v) { return p*v }, 1 );        // → 120:値の積
a.reduce(function(p, v) { return (p>v)?p:v; } );    // → 5:値の最大値