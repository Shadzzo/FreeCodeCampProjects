var regexPattern = /[^A-Za-z0-9]/g;
var paliStr = "";

function palindrome(str) {
    var strEdit = str.replace(regexPattern, "");
    strEdit = strEdit.toLowerCase();
    for (let i = 0; i < strEdit.length; i++) {
        if (strEdit[i] != strEdit[strEdit.length - (i+1)]) {
            return false;
        }            
    }
    return true;
}

console.log(palindrome(paliStr));