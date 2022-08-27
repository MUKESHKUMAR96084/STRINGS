let text = "Hello world, welcome to the universe.";
console.log(text.includes("universe."))
console.log(text.includes("the",25))
console.log(text.includes("world",11))//return true if a string conting a specified string
console.log(text.includes("hello"))//otherwise it return false
console.log(text.includes("world",7))
console.log(text.includes("Hello"))
console.log(text.includes("world",6))//return true if a string starts with a specified string
console.log(text.includes("hello"))//otherwise it return false
console.log(text.includes(7,"world",7))
console.log(text.includes("world",6))