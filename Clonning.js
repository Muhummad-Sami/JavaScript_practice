let obj = {
    name: "Alice",
    age: 30,
    hobbies: ["reading", "traveling", "coding"],

    printInfo : function() {
        console.log("Name: " + this.name);
        console.log("Age: " + this.age);
        console.log("Hobbies: " + this.hobbies.join(", "));
    }
}
// Cloning the object using spread operator
let cloneobj = {...obj};
cloneobj.name = "Bob";
cloneobj.age = 25;
cloneobj.hobbies.push("gaming");
console.log("Original Object:");
obj.printInfo();
console.log("Cloned Object:");
cloneobj.printInfo();
console.log(cloneobj);

// Cloning the object using Object.assign()
let cloneobj2 = Object.assign({}, obj);
cloneobj2.name = "Charlie";
cloneobj2.age = 35;
cloneobj2.hobbies.push("hiking");
console.log("Original Object:");
obj.printInfo();
console.log("Cloned Object (Object.assign):");
cloneobj2.printInfo();
console.log(cloneobj2);
console.log(obj);

// Cloning the object using JSON methods (Note: This method does not work for functions or non-serializable properties)
let cloneobj3 = JSON.parse(JSON.stringify(obj));
cloneobj3.name = "David";
cloneobj3.age = 40;
cloneobj3.hobbies.push("swimming");
console.log("Original Object:");
obj.printInfo();
console.log("Cloned Object (JSON methods):");
console.log(cloneobj3);
console.log(obj);

