let text = "mr Blue has a blue house and a Blue car";
console.log(text.search("blue"))
console.log(text.search(/Blue/));
console.log(text.search(/blue/gi))
console.log(text.search("red"))
var re = /Apples/gi;
var str = "Apples are round, and apples are juicy.";
if ( str.search(re) == 0 ){
 console.log("Does not contain Apples" ); 
}else{
 console.log("Contains Apples" ); 
}