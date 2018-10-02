// ジェネレータに例外を投げる：throwメソッド

function* idMaker() {
    var count = 0;
    while(true) {
        try{
            yield count++;
        } catch(e) {
            console.log("エラーが発生しました");
        }
    }
}
var iter = idMaker();
console.log(iter.next());           // → Object {value: 0, done: false}
console.log(iter.next());           // → Object {value: 1, done: false}
iter.throw(new Error("エラー"));    // → エラーが発生しました
                                    // → Object {value: 2, done: false}