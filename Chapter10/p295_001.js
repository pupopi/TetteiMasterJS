// ECMAScript6:オフセット指定して型付き配列生成

buffer = new ArrayBuffer(24);
var person = {
    id: new Uint32Array(buffer, 0, 1),
    name: new Uint8Array(buffer, 4, 16),
    weight: new Float32Array(buffer, 20, 1)
};