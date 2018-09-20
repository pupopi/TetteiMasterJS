// ランダムなアルファベット文字列の生成

randomChars = "";
for(var i=0; i<8; i++) {
    randomChars += String.fromCharCode(Math.floor(Math.random()*26) + "a".charCodeAt(0));
}
console.log(randomChars);