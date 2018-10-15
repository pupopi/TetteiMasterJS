// ClassListオブジェクトのメソッド

var element = document.getElementById("note1");
var list = element.classList;
for(var i=0; i<list.length; i++) {
    console.log(list[i]);
}

list.toggle("invisible");
console.log(element.className);     // note
list.toggle("invisible");
console.log(ekement.className)      // none invisible               
