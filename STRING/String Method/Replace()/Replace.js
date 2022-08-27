let text = "mukesh kumar is a bed programmer and develper";
let mukesh = text.replace("bed","good")
let kumar = mukesh.replace("and","&") 
console.log(kumar)
let text1 = "mr Blue has a blue house and a Blue car";
console.log(text1.replace("Blue","Red"))
console.log(text1.replace(/blue/g,"Red"))
console.log(text1.replaceAll("Blue","Red"))
console.log(text1.replace(/blue/gi,"Red"))
let result = text1.replace(/blue|house|car/gi,function(x){ 
    return x.toUpperCase()});
console.log(result)
var re = /apples/gi;
var str = "Apples are round, and apples are juicy.";
var newstr = str.replace(re, "oranges");
console.log(newstr );
var re = /(\w+)\s(\w+)/;
var str = "zara ali";
var newstr = str.replace(re, "$2, $1");
console.log(newstr);