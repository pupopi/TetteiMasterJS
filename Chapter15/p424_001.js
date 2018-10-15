// イベントリスナに引数を渡す:無名関数

var box = document.getElementById("box");
box.addEventListener("click", function(e) {
    changeBgColor(e, "red");
}, false);
function changeBgColor(e, color) {
    e.currentTarget.style.backgroundColor = color;
}