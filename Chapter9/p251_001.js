// プロパティスクリプタを取得する

var tom = { name: "Tom" };
Object.getOwnPropertyDescriptor(tom, "name");
// → {value: "Tom", writable: true, enumerable: true, configurable: true}

// プロトタイプから継承したプロパティ、存在しないプロパティにはundefined

Object.getOwnPropertyDescriptor({}, "name");        // → undefined
Object.getOwnPropertyDescriptor(tom, "toString");   // → undefined
