// Mathオブジェクトのプロパティ

function polarToDescartes(r, theta){
    var angle = Math.PI*theta/180;
    return {x: r*Math.cos(angle), y:r*Math.sin(angle)}
}