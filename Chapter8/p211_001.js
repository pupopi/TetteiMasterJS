// 関数定義時に決定するthis

var obj = {
    say: function() {
        console.log(this);
        var f = function() { console.log(this); };
        f();
        var g = () => console.log(this);
        g();
    }
};
obj.say();