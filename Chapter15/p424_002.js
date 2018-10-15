// 関数地を返す関数の値をイベントリスナに登録する

var box = document.getElementById("box");
box.addEventListener("click", changeBgColor("red"), false);
function changeBgColor(color) {
    return function(e) {
        e.currentTarget.style.backgroundColor = color;
    };
}