// reduceメソッド

// 配列を前方から畳み込み処理。要素を関数で処理、その戻り値を次の要素に対する関数の入力に、以下略

var a = [1, 2, 3, 4, 5];
a.reduce(function(prev, value) { return prev + value; }, 0 );   // → 15
a.reduce(function(prev, value) { return prev + value; } );      // → 15