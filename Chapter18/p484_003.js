// コンストラクタの定義方法：クラス宣言文で定義

class Card {
    constructor (suit, rank) {
        this.suit = suit;
        this.rank = rank;
    }
    show() {
        console.log(this.suit + this.rank);
    }
} 