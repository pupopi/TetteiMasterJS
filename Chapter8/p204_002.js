// 高級関数jointStringsを用いた文字列生成

function jointStrings(n, f){
    var s = "";
    for(var i=0; i<n; i++) {
        s += f(i);
    }
    return s;
}

var digits = jointStrings(10, function(i) { return i; });
var randomChars = jointStrings(8, function(i){
    return String.fromCharCode(Math.floor(Math.random()*26) + "a".charCodeAt(0));
})
console.log(digits);        // → 0123456789
console.log(randomChars);   // → nszfhnwf