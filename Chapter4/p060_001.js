// コンストラクタでオブジェクトの生成

function Card(suit, rank){
    this.suit = suit ;
    this.rank = rank ;
}

var card = new Card("ハート", "A");
console.log(card);