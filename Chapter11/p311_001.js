// consoleによるデバッグ

function f() {
    function g() {
        function h() {
            console.trace();
        }
        h();
    }
    g();
} 
f();