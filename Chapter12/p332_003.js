// 選択パターン

var fruits = /apple|peach|orange/;
fruits.test("2 apples");    // → true
fruits.test("pea");         // → false