// ECMAScript6:uフラグ

// 文字列をUnicodeコードポイントの列として処理

// サロゲートペアに対応した配列化も簡略化できる

function stringToArray(s) {
    return s.match(/[\s\S]/ug) || [];
}
stringToArray("𩸽の干物");      // → ["𩸽", "の", "干", "物"]