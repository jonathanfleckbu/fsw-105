//first exercise

function sum(num1, num2){
    return num1 + num2
}
var result = sum(2, 2)
console.log(result)

//second exercise

function threeNum(num1, num2, num3){
    var max = Math.max(num1, num2, num3);
    return max;
}
console.log(threeNum(2, 5, 8));

//third exercise

function checkNum(num){
    if(num % 2 == 0){
        console.log("even")
    }else{
        console.log("odd")
    }
}
checkNum(5)

//forth exercise

function lengthOfString(string){
    var string = "Hello World";
    var n = string.length;
    if(n <= 20){
        console.log(string + " " + string)
    }else if(n % 2 == 0) {
        console.log(string.slice(0, n / 2));
        
    }
}
return lengthOfString()
