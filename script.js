// ===================Question1: Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this: “Welcome to city of lights” 
// var cityName = prompt("Enter the city name");
// if (cityName == "Karachi" || cityName == "karachi") {
//     alert("Welcome to city of lights!");
// }
// else if (cityName == "Islamabad" || cityName == "islamabad") {
//     alert("Welcome to the capital city of Pakistan!");
// }
// else if (cityName == "Lahore" || cityName == "lahore") {
//     alert("Welcome to the heart of Pakistan!");
// }
// else if (cityName == "Hydrabad" || cityName == "hydrabad") {
//     alert("Welcome to the city of wind catchers!");
// }

// ===================Question2: Write a program to take “gender” as input from user. If the user is male, give the message: Good Morning Sir. If the user is female, give the message: Good Morning Ma’am.
// var yourGender = prompt("Enter your gender");
// if (yourGender == "male" || yourGender == "Male") {
//     alert("Good Morning Sir.");
// }
// else if (yourGender == "female" || yourGender == "Feale") {
//     alert("Good Morning Ma’am.");
// }

// ===================Question3: Write a program to take input color of road traffic signal from the user & show the message according to this table: 
// var color = prompt("Write color of road traffic signal");
// Red: Must Stop
// if (color == "RED" || color == "Red" || color == "red" || color == "R") {
//     alert("Must Stop");
// }
// Yellow: Ready to move
// else if (color == "YELLOW" || color == "Yellow" || color == "yellow" || color == "Y") {
//     alert("Ready to move");
// }
// Green: Move now
// else if (color == "GREEN" || color == "Green" || color == "green" || color == "G") {
//     alert("Move now.");
// }
// else {
//     alert("Please enter a right color of road traffic signal.");
// }

// ===================Question4: Write a program to take input remaining fuel in car (in litres) from user. If the current fuel is less than 0.25litres, show the message “Please refill the fuel in your car”
// var remainFuel = prompt("Enter the remaining fuel of your car in liters");
// if(remainFuel < 0.25){
//     alert("Please refill the fuel in your car");
// }

// ===================Question5:  Run this script, & check whether alert message would be displayed or not. Record the outputs.
// var a = 4;
// if (++a === 5) {
//     alert("given condition for variable a is true"); 
// }===The alert message is displayed.

// var b = 82;
// if (b++ === 83) {
//     alert("given condition for variable b is true");
// }===The alert message is not displayed because Condition false hai kyunki b++ pehle 82 return karega aur phir increment hoga.

// var c = 12;
// if (c++ === 13) {
//     alert("condition 1 is true");
// }=====False, because c++ returns 12, not 13.
// if (c === 13) {
//     alert("condition 2 is true");
// }=====True, because c is now 13 after the first increment.
// if (++c < 14) {
//     alert("condition 3 is true");
// }=====False, because ++c increments c to 14, which is not less than 14.
// if (c === 14) {
//     alert("condition 4 is true");
// }=====True, because c is now 14.

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost) {
//     alert("The cost equals");
// }=========True, totalCost equals laborCost + materialCost, so the alert "The cost equals" will trigger.
// if (true) {
//     alert("True");
// }=========True, so the alert "True" will trigger.
// if (false) {
//     alert("False");
// }=========False, so the alert "False" will not trigger.
// if ("car" < "cat") {
//     alert("car is smaller than cat");
// }=========True, because in string comparison, "car" is lexicographically smaller than "cat", so the alert "car is smaller than cat" will trigger.

// ===================Question6: Write a program to take input the marks obtained in three subjects & total marks. Compute & show the resulting percentage on your page. Take percentage & compute grade as per following table: 
// Taking input using prompt
// var subject1Eng = Number.parseInt(prompt(`Enter your English subject marks`));
// var subject2Math = Number.parseInt(prompt(`Enter your Math subject marks`));
// var subject3Urdu = Number.parseInt(prompt(`Enter your Urdu subject marks`));
// var totalMarks = Number.parseInt(prompt(`Enter total Marks of your three subjects`));
//
// // Calculate total obtained marks and percentage
// var obtainedMarks = subject1Eng + subject2Math + subject3Urdu;
// var percentage = (obtainedMarks / totalMarks) * 100;
//
// // Determine grade based on percentage
// var grade, remarks;
// if (percentage >= 80) {
//     grade = 'A-one';
//     remarks = (`Excellent`);
// } 
// else if (percentage >= 70) {
//     grade = 'A';
//     remarks = (`Good`);
// } 
// else if (percentage >= 60) {
//     grade = 'B';
//     remarks = (`You need to improve`);
// } 
// else {
//     grade = 'Fail';
//     remarks = (`Sorry`);
// }
//
// // Display on browser
// document.write(`<h1>Mats Sheet</h1><br>`);
// document.write(`Total marks: ${totalMarks}<br>`);
// document.write(`Marks obtained: ${obtainedMarks}<br>`);
// document.write(`Percentage: ${percentage}%<br>`);
// document.write(`Grade: ${grade}<br>`);
// document.write(`Remarks: ${remarks}`);


// ==================Question7: Guess game:
// Store a secret number (ranging from 1 to 10) in a variable. 
// var secretNum = 7;
//
// // Prompt user to guess the secret number. 
// var guessNum = prompt(`Guess the secret Number (ranging from 1 to 10) `);
//
// // If user guesses the same number, show “Bingo! Correct answer”.
// if (secretNum == guessNum) {
//     alert(`Bingo! Correct answer`);
// }
// // If the guessed number +1 is the secret number, show “Close enough to the correct answer”. 
// else {
//     alert(`The secret number is: ${secretNum}\n“Close enough to the correct answer”`);
// }

// ==================Question8: Write a program to check whether the given number is divisible by 3. Show the message to the user if the number is divisible by 3.
// // Taking input using prompt
// var number = parseInt(prompt(`Enter a number`));
//
// // given number is divisible by 3 Show the message to the user
// if (number % 3 === 0){
//     alert(`The ${number} is divisible by 3 `);
// }
// else{
//     alert(`The ${number} is not divisible by 3 `);
// }

// ==================Question9:  Write a program that checks whether the given input is an even number or an odd number.
// // Taking input using prompt
// var number = parseInt(prompt(`Enter a number`));
//
// if(number % 2 === 0){
//     alert(`This is even ${number} number.`);
// }
// else{
//     alert(`This is odd ${number} number.`);
// }

// ==================Question10: Write a program that takes temperature as input and shows a message based on following criteria
// var weather = parseInt(prompt(`Enter the temprature of today`));

// if (weather >= 40){
//     alert(`It is too hot outside.`)
// }
// else if (weather >= 30){
//     alert(`The Weather today is Normal.`)
// }
// else if (weather >= 20){
//     alert(`Today's Weather is cool.`)
// }
// else if (weather >= 10){
//     alert(`OMG! Today's weather is so Cool.`)
// }

// ==================Question11: Write a program to create a calculator for +,-,*, / & % using if statements. Take the following input: 
// // Taking input from the user
// // First number 
// var firstNum = parseFloat(prompt("Enter the first number:"));
// // Second number
// var secondNum = parseFloat(prompt("Enter the second number:"));
// // Operation (+, -, *, /, %) 
// var operation = prompt("Enter the operation (+, -, *, /, %):");

// // Compute & show the calculated result to user.
// if (operation === "+") {
//     alert("Result: " + (firstNum + secondNum));
// }
// else if (operation === "-") {
//     alert("Result: " + (firstNum - secondNum));
// }
// else if (operation === "*") {
//     alert("Result: " + (firstNum * secondNum));
// }
// else if (operation === "/") {
//     if (secondNum !== 0) {
//         alert("Result: " + (firstNum / secondNum));
//     }
//     else {
//         alert("Error: Division by zero is not allowed.");
//     }
// }
// else if (operation === "%") {
//     if (secondNum !== 0) {
//         alert("Result: " + (firstNum % secondNum));
//     }
//     else {
//         alert("Error: Division by zero is not allowed.");
//     }
// }
// else {
//     alert("Invalid operation entered.");
// }

