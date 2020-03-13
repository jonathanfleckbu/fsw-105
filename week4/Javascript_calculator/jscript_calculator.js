const readlineSync = require("readline-sync")

function addTwoNumbers(num1, num2){
    let sum = num1 + num2;
    console.log("The result: ", sum)
}

function timesTwoNum(num1, num2){
    let multipliedSum = num1 * num2;
    console.log("The result: ", multipliedSum)
}

function dividesTwo(num1, num2){
    let devidedSum = num1 / num2;
    console.log("The result: ", devidedSum)
}

function subtractsTwo(num1, num2){
    let subtractedSum = num1 - num2;
    console.log("The result: ", subtractedSum)
}

var num1 = readlineSync.questionInt("What is your first number? ");
console.log(num1);

var num2 = readlineSync.questionInt("What is your second number? ");
console.log(num2);

var whatDoYouWant = readlineSync.question("What would you like to do with the numbers? / add, sub, mult, or div? ")
console.log(whatDoYouWant)

if(whatDoYouWant === "add"){
    addTwoNumbers(num1, num2)
}else if(whatDoYouWant === "mult"){
    timesTwoNum(num1, num2)
}else if(whatDoYouWant === "div"){
    dividesTwo(num1, num2)
}else{
    subtractsTwo(num1, num2)
}