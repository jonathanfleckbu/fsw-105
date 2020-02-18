if(5 > 3) {
    console.log("is greater than")
}

var cat = 3;
var dog = 5;

if (cat === 3){
    console.log("is the length")
}

if(cat === dog){
    console.log("is equal to")
}else if(cat !== dog){
    console.log("not the same")
}

var person = {
    name: "Bobby",
    age: 12
}

if("person" >= 18){
    console.log("allowed")
}else{
    console.log("not allowed")
}

if(person.name.startsWith("B")){
    console.log("allowed")
}

if(person.name.startsWith("B") && person.age > 18){
    console.log("really allowed")
}else{
    console.log("not allowed again")
}

if(1 === "1"){
    console.log("strict")
}else if(1 == "1"){
    console.log("loose")
}else{
    console.log("not equal at all")
}

if(1 <= 2 && 2 === 4){
    console.log("yes")
}else{
    console.log("no")
}

var string = "dog";

if("dog" === string){
    console.log(true)
}

if("s" > 12){
    console.log("s is a number")
}else{
    console.log("s is not a number")
}

if(("s" + 2) !== "s" + 2) {
    console.log("right!")
}else{
    console.log("wrong!")
}

//var myNum = 10;
//I really tried for around two hours trying to get the ternary code to work. I will try and do even more research and work on it during the week. If I figure it out I will resubmit. 