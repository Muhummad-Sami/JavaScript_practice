// This is a simple string manipulation script

let myString = "Hello, World!";
console.log(myString);

// Basic string properties and methods
console.log("Length of string:", myString.length);
console.log("Uppercase:", myString.toUpperCase());
console.log("Lowercase:", myString.toLowerCase());
// Extracts characters from the start index up to, but not including, the end index.
console.log("Substring:", myString.substring(0, 5));
// Returns the position where the search text first appears, or -1 if it is not found.
console.log("Index of 'World':", myString.indexOf("World"));
// Replaces the first matching occurrence and returns a new string.
console.log("Replace 'World' with 'Universe':", myString.replace("World", "Universe"));

let text = "I am learning JavaScript";

// Search methods can check for text or return its position.
console.log(text.indexOf("JavaScript")); 
console.log(text.includes("learning"));
console.log(text.startsWith("I am"));
console.log(text.endsWith("JavaScript"));
console.log(text.search("learning"));

let str = "JavaScript";

// slice() uses start and end indexes; a negative index counts back from the end.
console.log(str.slice(0, 4));     
// Java

// substring() extracts the characters between the given indexes.
console.log(str.substring(4, 10)); 
// Script

// at() accepts negative indexes to count from the end of the string.
console.log(str.at(0));            
// J


let texts = "Hello World";

// replace() changes only the first matching occurrence.
console.log(texts.replace("World", "Sami"));
// Hello Sami

let data = "Apple Apple Apple";

// replaceAll() changes every matching occurrence.
console.log(data.replaceAll("Apple", "Mango"));
// Mango Mango Mango

let txt = "Apple,Banana,Mango";

// split() separates a string at each comma and returns an array.
let fruits = txt.split(",");

console.log(fruits);
// ["Apple", "Banana", "Mango"]

let first = "Hello";
let second = "World";

// concat() joins strings; the space is included as a separate argument.
console.log(first.concat(" ", second));
// Hello World


let Str = "Hi";

// repeat() returns the string repeated the specified number of times.
console.log(Str.repeat(3));
// HiHiHi

// Padding adds characters to the beginning or end until the target length is reached.
console.log(Str.padStart(5, "*"));
// ***Hi

console.log(Str.padEnd(5, "*"));
// Hi***


let name = "SAMI";

// charAt() returns the character at the specified index.
console.log(name.charAt(0));   
// S

// charCodeAt() returns the character's UTF-16 code unit.
console.log(name.charCodeAt(0));
// 83

// A negative at() index counts from the end of the string.
console.log(name.at(-1));
// I
