var shopper = {
    name: "Brownies",
    using: "recipe",
    itemsToGet: 8,
    goingToBeGood: true,
    groceryCart: ["eggs", "butter", "cocoa powder", "baking powder", "salt", "flour", "sugar", "vanilla extract"],
    fullName: function() {
        return this.name + " " + this.using;
       }
         
}
console.log(shopper.fullName());
