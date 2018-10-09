// 文字クラス

console.log(/[0123456789]/.test("10 little indians"));      // → true

[a-z]               // アルファベットの小文字の全体の中の1文字
[abcx-z]            // a,b,c,x,y,zのいずれか1文字
[a-zA-Z0-9]         // すべてのアルファベットと数字の中の1文字