// 列挙可の設定を変更する

var person = {
    name: "Tom",
    age: 17,
    sayHello: function() { console.log("Hello! " + this.name); }
};
Object.defineProperty(person, "sayHello", {enumerable: false});
for(var p in person) console.log(p);    // name,ageと順に表示