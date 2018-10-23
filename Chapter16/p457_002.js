// JSONデータ読み出し：responseを用いる

var req = new XMLHttpRequest();
req.addEventListener("load", function() {
    jsonObj = req.response;
}, false);
req.open("GET", "data.json", true);
req.responseType = "json";
req.send(null);