// 閏年を判定する関数

function isLeapYear(year){
    //OR>AND 400か4で割り切れて100で割り切れない年＝閏年
    if( year%400 == 0 || ((year%4 == 0)&&(year%100 != 0)) ) {
        return true;
    }
    return false;
}