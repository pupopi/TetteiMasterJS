// 要素を生成する便利な関数elt.js

/*----------------------------------------------------------------------------------*
 * 関数名:elt
 * 与えられた名前(name)、属性(attributes)、子ノードを持つ要素を作成して返す関数
 * ---------------------------------------------------------------------------------*/

 function elt(name, attributes) {
    var node = document.createElement(name);
    if(attributes){
        console.log(typeof attributes)
        for(var attr in attributes) {
            if(attributes.hasOwnProperty(attr)) {
                node.setAttribute(attr, attributes[attr]);
            }
        }
    }
    for(var i=2; i<arguments.length; i++) {
        var child = arguments[i];
        if( typeof child == "string" ) {
            child = document.createTextNode(child);
        }
        node.appendChild(child);
    }
    return node;
}