// in演算子でプロパティ存在確認

var person = { name: "Tom" };
console.log("name" in person);      // → true: 独自のプロパティ
console.log("age" in person);       // → false: プロパティは存在しない
console.log("toString" in person);  // → true: personはtoStringを継承している