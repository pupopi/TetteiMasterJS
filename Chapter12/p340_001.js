// 文字列の分割:splitメソッド

// 文字列を分割し、それを配列に納めて返す。(元の配列を変更しない)

var names = " Tom Sawyer ; Huckleberry Finn ; Becky Thatcher ";
var list = names.replace(/(^\s*|\s*$)/g,"").split(/\s*;\s*/);
console.log(list);
// → ["Tom Sawyer", "Huckleberry Finn", "Becky Thatcher"]