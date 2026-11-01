// For Loop
for (let i = 0; i < 5; i++) {
    console.log("Iteration:", i);
}

// for in loop

let person = {
    name: "Alice",
    age: 30,
    city: "New York"
};

for (let key in person) {
    console.log(key + ":", person[key]);
}

// for of loop

let colors = ["red", "green", "blue"];

for (let color of colors) {
    console.log(color);
    for (let char of color) {
        console.log(char);
    }
}