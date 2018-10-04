// ECMAScript6:複数の型付き配列をArrayBufferから生成

var buffer = new ArrayBuffer(16);
var a_uint8 = new Uint8Array(buffer);
var a_unit16 = new Uint16Array(buffer);
var a_unit32 = new Uint32Array(buffer);
var a_unit64 = new Float64Array(buffer);