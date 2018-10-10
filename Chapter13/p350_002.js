// async属性とdefer属性

// async属性
// script要素のコードの処理は非同期的に行われる
// 読み込み終了したコードを非同期的に実行するため、実行順序が保証されない
<script async src="../scripts/sample.js"></script>

// defer属性
// DOMツリー実行後に処理
<script defer src="../scripts/sample.js"></script>