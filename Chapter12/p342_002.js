// gフラグ正規表現とexecメソッド

// マッチする文字列を順番にexecで取得できる

var tel = /(\d{2,5})-(\d{1,4})-(\d{4})/g;
var text = "Tom: 010-1234-5678\nHuck: 020-550-7809\nBecky: 030-4321-9876";
while( (result = tel.exec(text)) != null ) {
    console.log(result[0], result[1], result[2], result[3]);
}

// →    010-1234-5678 010 1234 5678
//      020-550-7809 020 550 7809
//      030-4321-9876 030 4321 9876

// lastIndexの数字を変更すれば任意の文字位置から検索可能
tel.lastIndex = 0;
result = tel.exec(text);
console.log(result[0]);     // → 010-1234-5678