// 座標と速度を持つオブジェクト

function Particle(x, y, vx, vy){
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.velocity = Math.sqrt(vx*vx+vy*vy)
}
var p = new.Particle(0, 0, 3, 4);
console.log(p);