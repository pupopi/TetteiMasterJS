// try/catch/finally文の例

try {
    var p = permutation(a);     // permutationは例外を投げる可能性がある
    p.forEach(function(v) { console.log(v); });
} catch(e) {
    alert(e);
}