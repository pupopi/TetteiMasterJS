// パターンマッチング

var reg = /cat/;

// regは文字列の中にcatを含むパターンを表す

"cat"               // マッチする
"dog"               // マッチしない
"cats and dogs"     // マッチする
"ca"                // マッチしない
"Cat"               // マッチしない
"concatenate"       // マッチする