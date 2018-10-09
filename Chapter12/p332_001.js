// 単語境界マッチ「\b」

console.log(\/bcat\b/.test("私はcatが好きです。"));     // → true

// 単語境界でない位置「\B」
/\Bdog/     // "Bulldog"にマッチ、"dog"や""I love dog"にマッチしない