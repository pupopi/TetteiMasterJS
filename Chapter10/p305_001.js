// Set:全データを関数で処理する

var zip = new Set(["131-8634", "556-0002"]);
zip.forEach(function(value1, value2, map) {
    console.log(value1 + " => " + value2);
});

/*
131-8634 => 131-8634
556-0002 => 556-0002
*/