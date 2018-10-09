// フラグの設定方法

var reg = new RegExp("abc", "g");       // RegExpでは第二引数にフラグ"g"を設定

var reg = /abc/g;                       // 正規表現リテラルで生成するときは末尾スラッシュの後に設定

var reg = /abc/gi;                      // 複数フラグを設定する場合は順不同に並べて記述