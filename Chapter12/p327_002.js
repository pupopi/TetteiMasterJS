// 文字クラス略記号：数字と数字以外「\d」「\D」

// \dはdigit [0123456789]の略記

var dateTime = /\d\d\d\d\-\d\d\-\d\d \d\d:\d\d/;
console.log(dateTime.test("it's 2016-08-27 10:15"))     // → true
console.log(dateTime.test("2016-Aug-27 10:15"));        // → false