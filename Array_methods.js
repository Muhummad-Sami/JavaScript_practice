// All Array methods are defined in this file. This file is used to define the methods for the Array class in JavaScript.

let myArray = [1, 2, 3, 4, 5];

// forEach() executes a provided function once for each array element.
myArray.forEach((element, index) => {
    console.log("Element:", element, "at index:", index);
});

// map() creates a new array populated with the results of calling a provided function on every element in the calling array.
let squaredArray = myArray.map((element) => {
    return element * element;
});
console.log("Original Array:", myArray);
console.log("New Squared Array:", squaredArray);

// filter() creates a new array with all elements that pass the test implemented by the provided function.
let evenArray = myArray.filter((element) => {
    return element % 2 === 0;
}); 

console.log("Original Array:", myArray);
console.log("Even Array:", evenArray);

// reduce() executes a reducer function on each element of the array, resulting in a single output value.
let sum = myArray.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);

console.log("Sum of Array:", sum);

// find() returns the value of the first element in the array that satisfies the provided testing function.
let foundElement = myArray.find((element) => {
    return element > 3;
});

console.log("Found Element:", foundElement);

// findIndex() returns the index of the first element in the array that satisfies the provided testing function.
let foundIndex = myArray.findIndex((element) => {
    return element > 3;
});

console.log("Found Index:", foundIndex);

// some() tests whether at least one element in the array passes the test implemented by the provided function.
let hasEven = myArray.some((element) => {
    return element % 2 === 0;
});

console.log("Has Even Element:", hasEven);

// every() tests whether all elements in the array pass the test implemented by the provided function.
let allPositive = myArray.every((element) => {
    return element > 0;
});

console.log("All Elements Positive:", allPositive);

// push , pop , shift , unshift , splice , slice , concat , join , reverse , sort , indexOf , lastIndexOf , includes , fill , copyWithin , flat , flatMap , from , isArray , of

let fruits = ["Apple", "Banana", "Mango"];

// push() adds one or more elements to the end of an array and returns the new length of the array.
fruits.push("Orange");
console.log("After push:", fruits);

// pop() removes the last element from an array and returns that element.
let lastFruit = fruits.pop();
console.log("After pop:", fruits);
console.log("Popped Element:", lastFruit);

// shift() removes the first element from an array and returns that removed element.
let firstFruit = fruits.shift();
console.log("After shift:", fruits);
console.log("Shifted Element:", firstFruit);

// unshift() adds one or more elements to the beginning of an array and returns the new length of the array.
fruits.unshift("Strawberry");
console.log("After unshift:", fruits);

// splice() changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
fruits.splice(1, 1, "Grapes");  
console.log("After splice:", fruits);

// slice() returns a shallow copy of a portion of an array into a new array object.
let citrus = fruits.slice(1, 3);  
console.log("Sliced Array:", citrus);

// concat() is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
let tropicalFruits = ["Pineapple", "Papaya"];
let allFruits = fruits.concat(tropicalFruits);
console.log("Concatenated Array:", allFruits);

// join() joins all elements of an array into a string.
let fruitString = fruits.join(", ");
console.log("Joined String:", fruitString);

// reverse() reverses the order of the elements of an array in place.
fruits.reverse();
console.log("Reversed Array:", fruits);

// sort() sorts the elements of an array in place and returns the sorted array.
fruits.sort();
console.log("Sorted Array:", fruits);

// indexOf() returns the first index at which a given element can be found in the array, or -1 if it is not present.
let index = fruits.indexOf("Mango");
console.log("Index of Mango:", index);

// lastIndexOf() returns the last index at which a given element can be found in the array, or -1 if it is not present.
let lastIndex = fruits.lastIndexOf("Mango");
console.log("Last Index of Mango:", lastIndex);

// includes() determines whether an array includes a certain value among its entries, returning true or false as appropriate.
let hasMango = fruits.includes("Mango");
console.log("Includes Mango:", hasMango);

// fill() changes all elements in an array to a static value, from a start index (default 0) to an end index (default array.length).
let filledArray = new Array(5).fill(0);
console.log("Filled Array:", filledArray);  

// copyWithin() shallow copies part of an array to another location in the same array and returns it, without modifying its size.
let copyArray = [1, 2, 3, 4, 5];
copyArray.copyWithin(0, 3);
console.log("Copy Within Array:", copyArray);

// flat() creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
let nestedArray = [1, [2, [3, [4]]]];
let flatArray = nestedArray.flat(2);
console.log("Flat Array:", flatArray);

// flatMap() first maps each element using a mapping function, then flattens the result into a new array.
let flatMappedArray = [1, 2, 3].flatMap(x => [x, x * 2]);
console.log("Flat Mapped Array:", flatMappedArray);

// from() creates a new, shallow-copied Array instance from an array-like or iterable object.
let arrayFromString = Array.from("Hello");
console.log("Array from String:", arrayFromString);

// isArray() determines whether the passed value is an Array.
let isArray = Array.isArray(fruits);
console.log("Is fruits an array?", isArray);

// of() creates a new Array instance with a variable number of arguments, regardless of number or type of the arguments.
let arrayOfNumbers = Array.of(1, 2, 3, 4);
console.log("Array of Numbers:", arrayOfNumbers);

// length property returns the number of elements in an array.
console.log("Length of fruits array:", fruits.length);

// toString() returns a string representing the specified array and its elements.
let fruitsString = fruits.toString();
console.log("Fruits Array as String:", fruitsString);

// valueOf() returns the primitive value of the specified array.
let fruitsValue = fruits.valueOf();
console.log("Fruits Array Value:", fruitsValue);

// keys() returns a new Array Iterator object that contains the keys for each index in the array.
let keysIterator = fruits.keys();
console.log("Keys Iterator:", keysIterator);

// entries() returns a new Array Iterator object that contains the key/value pairs for each index in the array.
let entriesIterator = fruits.entries();
console.log("Entries Iterator:", entriesIterator);

