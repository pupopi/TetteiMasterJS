// setオブジェクトの生成

var set = new Set();
console.log(set);       // → Set {}

// イテレータを用いて
var zip = new set(["131-8634", "556-0002"]);
function* makeZip() {
    yield "131-8654";
    yield "556-0002";
}
var zips = makeZip();
zip = new Set(zips);
console.log(zip); // → Set {"131-8634", "556-0002"} 