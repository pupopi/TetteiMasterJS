// Object.createによる生成

var card = Object.create(Object.prototype,{
    suit: {
        value: "ハート",
        writable: "ハート",
        enumerable: true,
        configurable: true
    },
    rank: {
        value: "A",
        writable: true,
        enumerable: true,
        configurable: true
    }
});