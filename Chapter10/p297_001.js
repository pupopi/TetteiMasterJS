// ECMAScript:Mapオブジェクトの生成

var map = new Map();
console.log(map);           // → Map{}

// 初期データを引数で指定も可能
var zip = new Map([["Tom", "131-8634"], ["Huck", "556-0002"]]);
console.log(zip);           //  Map {"Tom" => "131-8634", "Huck" => "556-0002"}