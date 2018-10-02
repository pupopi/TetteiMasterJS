// オブジェクトのプロパティを設定する

var obj = {};
Object.defineProperty(obj, "name", {
    value: "Tom",           // 値
    writable: true,         // 書き込み可
    enumerable: false,      // 列挙可
    configurable: true      // 再定義可
});
Object.getOwnPropertyDescriptor(obj, "name");
// → {value: "Tom", writable: true, enumerable: false, configurable: true}