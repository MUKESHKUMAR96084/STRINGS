let text = "Hello world, welcome to the universe.";
console.log(text.endsWith("universe."))
console.log(text.endsWith("the",27))
console.log(text.endsWith("world",11))//return true if a string end with a specified string
console.log(text.endsWith("hello"))//otherwise it return false
console.log(text.endsWith(7,"world",7))