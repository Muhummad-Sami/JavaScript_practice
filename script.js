// Show a welcome message in a dialog.
alert("Welcome to our website!");

// Ask for the user's name and get the heading where the greeting will appear.
const userName = prompt("Please enter your name:");
const greeting = document.getElementById("greeting");

// Show a personalized greeting only if the user agrees.
let confirmResult = confirm("Do you want to see a personalized greeting?");
if (confirmResult) {
    greeting.textContent = `Hello, ${userName}! We're glad to have you here.`;
}
else {
    greeting.textContent = "Hello! We're glad to have you here.";
}   

// Change the page heading and its text color when this function is called.
function changeText() {
    const heading = document.getElementById("heading");

    heading.textContent = "Welcome to JavaScript!";

    heading.style.color = "red";
}

// Set the page background to the color entered by the user.
let color = prompt("Please enter a color (e.g., red, blue, green):");
document.body.style.backgroundColor = color;

// Redirect to Google for numbers greater than 5; otherwise, show a message.
let number = prompt("Please enter a number:");
if(number >5){
    location.href = "https://www.google.com";
}
else{
    document.write("You entered a number less than or equal to 5. You will stay on this page.");
}