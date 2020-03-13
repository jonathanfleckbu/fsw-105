//exercise #1
let ownerName = "John"
let age = 101

function runForLoop(pets) {
    const petObjects = []
    for(let i = 0; i < pets.length; i++){
        let pet = { type: pets[i] } 
        ownerName;
        if (pets[i] === "cat") {
            name = "fluffy"
        } else {
            name = "spot"
        }
        console.log("pet name: ", name)
        pet.name = name
        petObjects.push(pet)
    }
    
    console.log("man name: ", ownerName)
    return petObjects
}

runForLoop(["cat", "dog"])

//Exercise #2

// const carrots = ["bright orange", "ripe", "rotten"]

// function mapVegetables(arr){
//     const result = arr.map(carrot => type, name)
// }
// console.log(result)

//Exercise #3

const people = [{
    name: "Princess Peach",
    friendly: false
}, {
    name: "Luigi",
    friendly: true
    
}, {
    name: "Mario",
    friendly: true
}, {
    name: "Bowser",
    friendly: false
}]

const filterForFriendly = people.filter(person => person.friendly)
    console.log(filterForFriendly)

//exercise #4

const result = (a, b) => console.log(doMathsum(a + b))
// not sure what I am missing here. 

let produceProduct = (a, b) => console.log(a * b)

//Exercise 5

const firstName = "Jane"
const lastName = "Doe"
const age = 100

let printString = function(){
    console.log(printString("Hi " + firstName + lastName + ", how does it feel to be " + age + "?"))
}
