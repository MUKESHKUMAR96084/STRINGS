let text = "         mukesh kumar        ";
console.log(text.trim())//remove whitespace from both side of string
console.log(text.repeat(2)) //repeat string two times
console.log(text.replace(/^\s+|\s+$/gm,''))//remove whitespace from both side of string
console.log(text.replace(/^\s+|\s+$/gm,'m'))//add the m from both side of string
console.log(text.trimStart())
console.log(text.trimEnd())
console.log(text.trimLeft())
console.log(text.trimRight())