// オブジェクトは参照型

var a = card;

console.log(a.suit)
a.suit = "スペード";
console.log(a.suit);
console.log(card.suit);