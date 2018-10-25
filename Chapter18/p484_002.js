// コンストラクタの定義方法：関数リテラルで定義

Card = function(suit, rank) {
    this.suit = suit;
    this.rank = rank;
};
Card.prototype.show = function() {
    console.log(this.suit + this.rank);
};