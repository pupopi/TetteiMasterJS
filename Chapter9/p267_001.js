// Fisher-Yeates法によるシャッフルをArray.prototypeに追加

Array.prototype[Symbol.for("shuffle")] = function() {
    var a = this;
    var m = a.length, t, i;
    while(m) {                                      // mが0になったら終了
        i = Math.floor(Math.random()*m--);          // m未満のインデックスiをランダムに選びmを1つ減ずる
        t= a[m]; a[m] = a[i]; a[i] = t;             // a[i]とa[m]を交換
    }
    return this;
};
var array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(array[Symbol.for("shuffle")]());        // → [8, 0, 3, 4, 1, 9, 7, 6, 5, 2]