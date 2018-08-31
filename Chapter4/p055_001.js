// 関数内の変数宣言巻き上げ

fumction(f){
    console.log(a);
    var a = "local";
    console.log(a);
    return a;
}