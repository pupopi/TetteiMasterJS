// イベントハンドラの登録方法

// HTML要素のイベントハンドラ属性に設定
<input type="button" onclick='changeColor();'></input>

// DOM要素オブジェクトのイベントハンドラプロパティに設定
var btn = document.getElementById("button");
btn.onclick = changeColor();

// addEventListenerメソッドを用いる
var btn = document.getElementById("button");
btn.addEventListener("click", changeColor, false);