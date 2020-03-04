var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

vegetables.pop()
console.log("vegetables: ", vegetables)

fruit.shift()
console.log("fruit: ", fruit)

let orangeIndex = fruit.indexOf("orange")
console.log(orangeIndex)

fruit.push(orangeIndex)
console.log("fruit: ", fruit)

let lengthOfVeg = vegetables.length;
console.log(lengthOfVeg)

vegetables.push(lengthOfVeg)
console.log(vegetables)

let food = fruit.concat(vegetables)
console.log(food)

let newFood = food.splice(4, 2)
console.log(food)

food.reverse()
console.log(food)

 let salad = food.toString()
 console.log(salad)