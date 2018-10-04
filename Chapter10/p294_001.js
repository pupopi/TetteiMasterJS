// ECMAScript6:型付き配列はArrayBufferオブジェクトのコピー

var a = new Int8Array(10);
var buffer = a.buffer;
console.log(buffer.bytelength);     // → 10