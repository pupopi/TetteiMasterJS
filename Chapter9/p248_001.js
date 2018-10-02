// 極座標の入出力インターフェースを持つデカルト座標

var point = {
    x: 1.0,
    y: 1.0,
    get r() { return Math.sqrt(this.x*this.x+this.y*this.y); },
    get theta() { return Math.atan2(this.y, this.x); },
    set polarCoordinates(pc) {
        this.x = pc.r*Math.cos(pc.theta);
        this.y = pc.r*Math.sin(pc.theta);
    }
};
console.log(point.r);           // → 1.4142135623730951
console.log(point.theta);       // → 0.7853981633974483
point.polarCoordinates = {r: 2, theta: Math.PI/4};
console.log(point)              // → Object {x: 1.4142135623730951, y: 1.414213562373095}