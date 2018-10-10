// おもなノードオブジェクト

console.log(document.constructor);      // → HTMLDocument() {...}
console.log(document.nodeName, document.nodeValue, document.nodeType);
// → #document null 9
var element = document.children[0].children[1].firstElementChild;
console.log(element.constructor);       // → HTMLHeadingElement() {...}
console.log(element.nodeName, element.nodeValue, element.nodeType);
// → H1 null 1