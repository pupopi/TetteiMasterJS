// コンストラクタの定義方法：クラス式で定義

var Card = class {
    constructor (suit, rank) {
        this.suit = suit;
        this.rank = rank;
    }
    show() {
        console.log(this.suit + this.rank);
    }
};