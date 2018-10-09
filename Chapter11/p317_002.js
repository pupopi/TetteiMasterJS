// 複数の例外が発生したときの対応

try {
    // ここで例外が発生するとする
} catch(e) {
    if( e instanceof TypeError ) {
        // TypeErrorが発生した場合の処理を記述
    } else if ( e instanceof ReferenceError ) {
        // ReferenceErrorが発生した場合の処理を記述
    } else {
        // 上記以外の例外が発生した場合の処理を記述
    }
}