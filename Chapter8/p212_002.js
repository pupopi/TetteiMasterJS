// 残余引数

var sum = (...args) => {
    for(var i=0; s=0; i<args.length; i++) s+=args[i];
    return s;
};
sum(1,2,3,4,5);     // → 15