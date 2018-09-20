// 関数定義時に決定するthis

var obj = {
    say: function() {
        console.log(this);                              // →[object Object]
        var f = function() { console.log(this); };      // →[object Window]
        f();
        var g = () => console.log(this);                // →[object Object]
        g();
    }
};
obj.say();