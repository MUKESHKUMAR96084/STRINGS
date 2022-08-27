let text = "MUKESH";
const myArray = text.split("")
console.log(myArray[4])
text = ""
for(let i =0;i<myArray.length;i++)
{
    text+=myArray[i]+"\n"
}
console.log(text)
let str = "M,U,K,E,S,H,K,U,M,A,R";
let a = "d e v e l o p e r"
let b = "f|U|L|L|S|T|A|C|K"
const thisArray = str.split(",")
const array = a.split(" ")
const subarray = b.split("|")
console.log(thisArray[7])
console.log(array[4])
console.log(subarray[4])
