// exercise 1
var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer", "computer"]


function countItemOnList(nameOfList, itemToBeSearched){
    var numberOfItems = 0;
    for(i = 0; i < nameOfList.length; i++){
        if(nameOfList[i] == itemToBeSearched){
            numberOfItems = numberOfItems + 1;
        }
    }
    console.log("Final Count: " + numberOfItems)
}

countItemOnList(officeItems, "computer")

// exercise 2 and 3

var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
        name: "Mike",
        age: 12,
        gender: "male"
    },{
        name: "Madeline",
        age: 80,
        gender: "female"
    },{
        name: "Cheryl",
        age: 22,
        gender: "female"
    },{
        name: "Sam",
        age: 30,
        gender: "male"
    },{
        name: "Suzy",
        age: 4,
        gender: "female"
    }
]

for(var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
    
    if(peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18){
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i] = " old enough.")
    }else{
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i] = " not old enough.")
        
    }
}

for(var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
    
    if(peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18){
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough.")
    }else{
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough.")
        
        }
}

for(var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++){

    if(peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18){
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough to see Mad Max.")
    } else {
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough to see Mad Max.")
    }
}

// exercise 4

for(var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
    var genderReview = (peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "female")?"HIM":"HER";

    if(peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18){
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough to see Mad Max Fury Road. Let " + genderReview + "in!")
    } else {
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough to see Mad Max Fury Road. Stop " + genderReview + "!")
    }
}

// exercise 5

for(i = 0; i <= 100; i++){
    if(i % 2 == 1){
        console.log("Odd")
    }else{
        console.log("even")
    }
}