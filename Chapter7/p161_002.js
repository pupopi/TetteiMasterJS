// ラベルを指定したcontinue文

var a = [[2, 4, 6, 8], [1, 5, 12, 3], [7, 6, 8, 5], [5, 15, 3, 4], [3, 2, 9, 4]];
var max = Number.NEGATIVE_INFINITY;
mainloop: for (var i=0; i<a.length; i++){
    var average = 0;
    for(var j=0; j<a[i].length; j++) {
        if ( a[i][j]>10 ) continue mainloop;
        average += a[i][j];
    }
    average /= a[i].length;
    console.log("i = " + i +":平均値 = " + average);
    if( max < average ) max = average;
}
console.log("平均値の最大化 = " + max);