//ウィンドウ間の操作

var w = open("newpage.html", "new page", "width=  400, height = 300");
w.document.body.style.backgroundColor = "green";        // サブウィンドウの背景を緑に

opener.document.body.style.backgroundColor = "red";     // 親ウィンドウの背景を赤に