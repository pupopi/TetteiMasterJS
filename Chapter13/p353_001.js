// 機能性テスト

if(Element.addEventListener) {          // 利用する前にDOMメソッドをテスト
    element.addEventListener("click", handlerm false);
} else if(element.attachEvent) {    　　// 利用する前にIEメソッドをテスト
    element.attachEvent("onclick", handler);
} else {                               // いずれも使えないときは汎用的な方法を利用
    element.onclick = handler;
}