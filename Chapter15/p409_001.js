// イベントリスナの登録

// target.addElementListener(type, listner, useCapture);

<div id="box">click me</div>

window.onlad = function() {
    var element = document.getElementById("box");
    element.addEventListener("click", function(e) {
        e.currentTarget.style.backgroundColor = "red";
    }, false);
};