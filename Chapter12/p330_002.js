// HTMLヘッダ部分を正規表現

var header = /<h[1-6]>.*<\/h[1-6]>/;
console.log(header.test("<h1>JavaScript</h1>"));        // → true
console.log(header.test("<h1>JavaScript</h2>"));        // → true

var header = /<(h[1-6])>.*<\/\1>/;                      // \1で1番目の部分正規表現を参照
console.log(header.test("<h1>JavaScript</h1>"));        // → true
console.log(header.test("<h1>JavaScript</h2>"));        // → false

var header = var header = /<(h[1-6])>.*<\/\1>/;
console.log(header.exec("<h1>JavaScript</h1>"));
// → ["<h1>Javascript</h1>", "h1"]