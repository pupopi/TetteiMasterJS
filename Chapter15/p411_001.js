// イベントリスナの解除

// target.removeEventListener(type, listner, useCapture);

var element = document.getElementById("button");
element.addEventListener("click", function() {
    console.log("Hello!");
    element.removeEventListener("click", arguments.callee, false);
}, false);