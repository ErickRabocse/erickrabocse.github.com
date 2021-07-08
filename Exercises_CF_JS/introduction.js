console.log("Hello Erick!");
//alert("Hello there!");

let a = "chain";
a = 31;
a = 2.1;

//Conditions: If
if(5 == "5" && 10 > 2){
  console.log("That's right!");
  console.log("When the expression is True it can display multiple lines.")
}

//Conditions: Else
let age = 17;
if (age > 18){
  console.log("You may access");
}
else {
  console.log("Access not allowed");
}

//Conditions: Else
let grade = 10;
if (grade == 10){
  console.log("Nice!");
}else if (grade > 7){
  console.log("Good job!");
}else if (grade > 5){
  console.log("Try harder.");
}else{
  console.log("Flunked");
}

//break (stops cycle)
for (let i = 1; 1 <= 10; i++){
  if (i >= 5) break;
  console.log(i);
}
//continue (skips an iteration result)
for (let i = 1; i <= 10; i++){
  if (i % 2 == 0) continue;
  console.log(i);
}

console.log("WHILE BEGINS HERE");
//while
let x = 1;
while (x <= 10){
  x++;
  console.log(x);
}
//DO while
console.log("DO WHILE");

let i = 1;
do{
  i++;
  console.log(i);
}while (i <= 10);

//EXERCISES
console.log("This cycle checks if the number is odd!");
for (i = 1; i <= 10; i++){
  if (i % 2 == 0) continue;
  console.log(i);
}
console.log("This cycle checks if the number is even!");
for (i = 1; i <= 10; i++){
  if (i % 2 != 0) continue;
  console.log(i);
}


console.log("This cycle checks if the number is even or odd!");
let c = parseInt(prompt("Type a number."));
  if (c % 2 == 0){
    console.log("odd");
  }else{
    console.log("even");
  }


console.log("This asks for numbers and adds, substracts, multiplies & divides them.");

let e = parseInt(prompt("Type a number"));
let o = parseInt(prompt("Type another number"));

let addition = (e + o);
let subtract = (e - o);
let division = (e / o);
let multiplication = (e * o);

console.log("The addition of " + e + " plus " + o + " is " + addition);
console.log("The subtraction of " + e + " minus " + o + " is " + subtract);
console.log("The division of " + e + " divided by " + o + " is " + division);
console.log("The multiplication of " + e + " times " + o + " is " + multiplication);

console.log("This gives you the Fibonacci series up to the number you desire.");

const number = parseInt(prompt("How many times do you want the Fibonacci series to run?"));

let n1 = 0, n2 = 1, nextNumber;

console.log("Fibonacci series");
for (let i = 1; i <= number; i++){
  console.log(n1);
  nextNumber = n1 + n2;
  n1 = n2;
  n2 = nextNumber;
}


console.log("This game asks you to guess the number.");
let s = parseInt(prompt("Can you guess the number? Type the number you think is hidden. The secret number is between 1 and 10. You have three chances to guess!"))

let secretNumber = 10;

while (s != secretNumber) {
    if (s > secretNumber){
      s = parseInt(prompt("Try again, it's a smaller number."));
    }else if (s < secretNumber) {
      s = parseInt(prompt("Try again, it's a larger number."));
    }else{
      s = parseInt(prompt("Please type a digit."));
    }
}
parseInt(prompt("You guessed. How do you feel?"));
