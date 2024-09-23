// ### 1. Welcome based on City Input
function myfun(){
let city = prompt("Enter your city name:");
if (city.toLowerCase() === "karachi") {
    alert("Welcome to city of lights");
} else {
    alert("Welcome to " + city);
}


// ### 2. Greeting Based on Gender Input
let gender = prompt("Enter your gender:");
if (gender.toLowerCase() === "male") {
    alert("Good Morning Sir");
} else if (gender.toLowerCase() === "female") {
    alert("Good Morning Ma’am");
} else {
    alert("Good Morning!");
}


// ### 3. Traffic Signal Color Messages
let signalColor = prompt("Enter traffic signal color:");
if (signalColor.toLowerCase() === "red") {
    alert("Must Stop");
} else if (signalColor.toLowerCase() === "yellow") {
    alert("Ready to move");
} else if (signalColor.toLowerCase() === "green") {
    alert("Move now");
} else {
    alert("Invalid color");
}


// ### 4. Fuel Refill Alert
let fuel = parseFloat(prompt("Enter remaining fuel in litres:"));
if (fuel < 0.25) {
    alert("Please refill the fuel in your car");
} else {
    alert("Fuel level is sufficient");
}


// ### 5. Script Results
// a
var a = 4;
if (++a === 5) {
    alert("given condition for variable a is true");
}

// b
var b = 82;
if (b++ === 83) {
    alert("given condition for variable b is true");
}

// c
var c = 12;
if (c++ === 13) {
    alert("condition 1 is true");
}
if (c === 13) {
    alert("condition 2 is true");
}
if (++c < 14) {
    alert("condition 3 is true");
}
if (c === 14) {
    alert("condition 4 is true");
}

// d
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    alert("The cost equals");
}

// e
if (true) {
    alert("True");
}
if (false) {
    alert("False");
}

// f
if ("car" < "cat") {
    alert("car is smaller than cat");
}


// ### 6. Grade Calculation Based on Percentage
let marks1 = parseFloat(prompt("Enter marks for subject 1:"));
let marks2 = parseFloat(prompt("Enter marks for subject 2:"));
let marks3 = parseFloat(prompt("Enter marks for subject 3:"));
let totalMarks = parseFloat(prompt("Enter total marks:"));

let obtainedMarks = marks1 + marks2 + marks3;
let percentage = (obtainedMarks / totalMarks) * 100;
let grade;

if (percentage >= 80) {
    grade = "A+";
} else if (percentage >= 70) {
    grade = "A";
} else if (percentage >= 60) {
    grade = "B";
} else if (percentage >= 50) {
    grade = "C";
} else if (percentage >= 40) {
    grade = "D";
} else {
    grade = "Fail";
}

alert("Percentage: " + percentage + "%, Grade: " + grade);


// ### 7. Guessing Game
let secretNumber = 7;
let guessedNumber = parseInt(prompt("Guess the secret number (1-10):"));

if (guessedNumber === secretNumber) {
    alert("Bingo! Correct answer");
} else if (guessedNumber + 1 === secretNumber) {
    alert("Close enough to the correct answer");
} else {
    alert("Try again!");
}


// ### 8. Divisibility by 3
let number1 = parseInt(prompt("Enter a number:"));
if (number1 % 3 === 0) {
    alert(number1 + " is divisible by 3");
} else {
    alert(number1 + " is not divisible by 3");
}


// ### 9. Even or Odd Number
let number = parseInt(prompt("Enter a number:"));
if (number % 2 === 0) {
    alert(number + " is an even number");
} else {
    alert(number + " is an odd number");
}


// ### 10. Temperature Message
let temperature = parseFloat(prompt("Enter the temperature:"));

if (temperature > 40) {
    alert("It is too hot outside.");
} else if (temperature > 30) {
    alert("The Weather today is Normal.");
} else if (temperature > 20) {
    alert("Today's Weather is cool.");
} else if (temperature > 10) {
    alert("OMG! Today’s weather is so Cool.");
} else {
    alert("It's very cold!");
}

// ### 11. Simple Calculator
let num1 = parseFloat(prompt("Enter the first number:"));
let num2 = parseFloat(prompt("Enter the second number:"));
let operation = prompt("Enter the operation (+, -, *, /, %):");
let result;

if (operation === "+") {
    result = num1 + num2;
} else if (operation === "-") {
    result = num1 - num2;
} else if (operation === "*") {
    result = num1 * num2;
} else if (operation === "/") {
    result = num1 / num2;
} else if (operation === "%") {
    result = num1 % num2;
} else {
    result = "Invalid operation";
}

alert("The result is: " + result);


// ### 1. Check Character Type (Number, Uppercase, or Lowercase)
let char = prompt("Enter a character:");

if (!isNaN(char)) {
    alert("It's a number.");
} else {
    let ascii = char.charCodeAt(0);
    if (ascii >= 65 && ascii <= 90) {
        alert("It's an uppercase letter.");
    } else if (ascii >= 97 && ascii <= 122) {
        alert("It's a lowercase letter.");
    } else {
        alert("It's not a number or a letter.");
    }
}


// ### 2. Larger of Two Integers
let num0 = parseInt(prompt("Enter the first integer:"));
let num01 = parseInt(prompt("Enter the second integer:"));

if (num1 > num01) {
    alert(num0 + " is larger.");
} else if (num01 > num0) {
    alert(num01 + " is larger.");
} else {
    alert("Both numbers are equal.");
}


// ### 3. Positive, Negative, or Zero
let num = parseFloat(prompt("Enter a number:"));

if (num > 0) {
    alert("The number is positive.");
} else if (num < 0) {
    alert("The number is negative.");
} else {
    alert("The number is zero.");
}


// ### 4. Check if Character is a Vowel
let char1 = prompt("Enter a character:").toLowerCase();
let vowels = ['a', 'e', 'i', 'o', 'u'];

if (vowels.includes(char1)) {
    alert("True, it's a vowel.");
} else {
    alert("False, it's not a vowel.");
}


// ### 5. Password Validation
let correctPassword = "myPassword";  // You can set the correct password here
let userPassword = prompt("Enter your password:");

if (!userPassword) {
    alert("Please enter your password.");
} else if (userPassword === correctPassword) {
    alert("Correct! The password you entered matches the original password.");
} else {
    alert("Incorrect password.");
}


// ### 6. Fixing the If/Else Statement
// The error in this code is a missing closing bracket (}) after the if block. Here’s the fixed version:
var greeting;
var hour = 13;

if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}

alert(greeting);


// ### 7. Time-Based Greeting Program
// This program takes time as input in a 24-hour format and outputs a message based on the time of day.

let time = parseInt(prompt("Enter the time in 24-hour format (e.g., 1900 for 7pm):"));

if (time >= 0 && time < 1200) {
    alert("Good morning!");
} else if (time >= 1200 && time < 1700) {
    alert("Good afternoon!");
} else if (time >= 1700 && time < 2100) {
    alert("Good evening!");
} else if (time >= 2100 && time <= 2359) {
    alert("Good night!");
} else {
    alert("Invalid time entered.");
}

}