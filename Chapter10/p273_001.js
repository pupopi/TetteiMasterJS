// spliceメソッド

// 配列の要素の挿入・削除両方できる
// 第一引数：配列変化の開始位置
// 第二引数：配列化ら削除する要素の数（指定なしで第一引数以降全削除）
// 第三引数：挿入する配列要素

var a = ["A", "B", "C", "D"];
a.splice(1, 2, "X", "Y", "Z");  // a → ["A", "X", "Y", "Z", "D"]　戻り値 = ["B", "C"]