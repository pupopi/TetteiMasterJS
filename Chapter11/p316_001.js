// Errorオブジェクト

x++;                        // ReferenceError: xが存在しないのに代入した
if( a>0 ) { a++:            // SyntaxError: }がない
var obj = {};
obj.join();                 // TypeError: joinメソッドが定義されていない
var pi = 3.14159;
pi.toFixed(100);            // RangeError: toFixedメソッドの引数は0～20の間
decodeURIComponent("%")     // URIError: %の後に何もない