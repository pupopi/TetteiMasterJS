// ECMAScript6環境への対応確認

function hasRegExpY() {
    try{
        new RegExp(".","y");
        return true;
    } catch(e) {
        return false;
    }
}