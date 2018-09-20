// モジュールパターン

var Module = Module || {};
(function(_Module){
    var name = "NoName";            //プライベート変数
    function getName() {            //プライベート変数
        return name;
    }
    _Module.showName = function() { //プライベート変数
        console.log(getName());
    };
    _Module.setName = function(x) { //パブリック変数
    };
})(Module);
Module.setName("Tom");
Module.showName();                  // →"Tom"