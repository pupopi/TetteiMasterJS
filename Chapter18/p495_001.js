// スーパータイプのメソッドを呼び出す

class Ball extends Circle {
    move(dx, dy) {
        this.center.x += dx;
        this.center.y += dy;
    }
    toString() {
        var str = super.toString();
        return str.replace("Circle", "Ball");
    }
}

var ball = new Ball({x: 0, y:0}, 2);
console.log(ball.toString());       // → Ball 中心(0, 0), 半径 = 2