let text1 = "ab"
let text2 = "cd"
let text3 = "cd"
console.log(text1.localeCompare(text2))
console.log(text2.localeCompare(text1))
console.log(text3.localeCompare(text2))
var str1 = new String( "This is beautiful string" );
var index = str1.localeCompare( "XYZ" );
console.log("localeCompare first :" + index );
var index = str1.localeCompare( "AbCD ?" );
console.log("localeCompare second :" + index );