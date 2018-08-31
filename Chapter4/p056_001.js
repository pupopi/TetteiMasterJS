// let宣言子

let x = "outer x";
{
    let x = "inner x";
    let y = "inner y";
    console.log(x);
    console.log(y);
}
console.log(x);
console.log(y);