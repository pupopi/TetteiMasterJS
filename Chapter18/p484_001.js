// コンストラクタの定義方法：関数宣言文で定義

function Card(suit, rank) {
    this.suit = suit;
    this.rank = rank;
}
Card.prototype.show = function() {
    console.log(this.suit + this.rank);
};