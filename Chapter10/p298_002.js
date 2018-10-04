// ECMAScript6:値の取得とデータの削除

var zip = new Map();
zip.set("Tom", "131-8634");
zip.set("Huck", "556-0002");
console.log(zip.get("Tom"));        // → 131-8634
// 一部削除
zip.delete("Huck");
// 全削除
zip.clear();