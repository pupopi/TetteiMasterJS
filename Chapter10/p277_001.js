// indexOfメソッド、lastIndexOf

// 第一引数：検索値
// 第二引数：検索を始めるインデックス、省略＝０、配列長さより大きいと行わない。
// 見つからない場合　戻り値 = -1

// indexOfは前から、lastIndexOfは後ろから検索

var a = ["A", "B", "C", "C", "D"];
a.indexOf("C");         // → 2
a.lastIndexOf("C");     // → 3
a.indexOf("C", 3)