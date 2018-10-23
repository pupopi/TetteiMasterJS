// JSONデータ読み出し：responseTectを用いる

var req = new XMLHttpRequest();
req.addEventListener("load", function() {
    jsonObj = JSON.parse(req.responseText);
}, false);
req.open("GET", "data.json", true);
req.send(null);