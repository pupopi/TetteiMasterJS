// 肯定的先読み・否定的先読み

// 肯定的先読み:(?=pattern)
// x(?=y)のとき、xの後にyが続く

console.log(/Java(?=Script)/.exec("I like JavaScript"));        // → ["Java"]
console.log(/Java(?=Script)/.exec("I like JavaCoffee"));        // → null

// 否定的先読み:(?!pattern)
// x(?!y)のとき、xの後にyが続かない

console.log(/Java(?=Script)/.exec("I like JavaScript"));        // → null
console.log(/Java(?=Script)/.exec("I like JavaCoffee"));        // → ["Java"]
