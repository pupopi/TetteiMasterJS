// Set:データの追加・存在確認・削除

var zip = Set();
zip.add("131-8654");
zip.add("556-0002");
console.log(zip);   // → {"131-8634", "556-0002"} 

console.log(zip.has("131-8654"));   // → true
console.log(zip.has("154-0000"));   // → false

zip.delete("131-8654");
zip.clear();