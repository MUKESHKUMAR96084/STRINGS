let text = "The rain in SPAIN stays mainly in the plain";
console.log(text.match("ain"))
console.log(text.match(/ain/))
console.log(text.match(/ain/g))
console.log(text.match(/ain/gi)) 
var str = "For more information, see Chapter 3.4.5.1";
var re = /(chapter \d+(\.\d)*)/i;
var found = str.match( re );
console.log(found );