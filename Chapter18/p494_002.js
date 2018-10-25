// 継承によるクラスの拡張

class Circle {
    constructor(center, radius) {
        this.center = center;
        this.radius = radius;
    }
    area() {
        return Math.PI*this.radius*this.radius;
    }
    toString() {
        return "Circle "
        + "中心(" + this.center.x + "," +this.center.y
        + "), 半径 = " + this.radius;
    }
}
class Ball extends Circle {
    move(dx, dy) {
        this.center.x += dx;
        this.center.y += dy;
    }
}

var ball = new Ball({x: 0, y: 0}, 2);
console.log(ball.toString());       // → Circle 中心(0,0), 半径 = 2
console.log(ball.area());           // → 12.566370614359172
ball.move(1,2);
console.log(ball.toString());       // → Circle 中心(1,2), 半径 = 2