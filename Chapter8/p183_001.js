// thisの値

var tom = {
    name: "Tom",
    styleHello: function() {
        console.log("Hello! " + this.name);
    }
};

tom.styleHello();