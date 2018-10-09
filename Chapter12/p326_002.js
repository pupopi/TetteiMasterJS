// 文字コードの文字クラス

[\u3041-\u3096]     // 日本語のひらがな1文字
[\u30A1-\u30FA]     // 日本語のカタカナ1文字
[\u3400-\u9FFF]     // CJK統合漢字拡張A、CJK統合漢字の1文字
[\uF900-\uFAFF]     // CJK互換漢字の1文字

var surrogatePair = /[\uD800-\uD8FF][\uDC00-\uDFFF]/;
console.log(surrogatePair.test("𩸽"));      // → true
console.log(surrogatePair.test("鮭"));      // → false

/h[1-6]/    // HTMLの見出しの要素<h1>～<h6>を含む