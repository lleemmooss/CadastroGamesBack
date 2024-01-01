// 1 - OBJECT TYPES FOR INTERFACE
function showDetailsProduct(product) {
    console.log("Product: " + product.name + " Price: " + product.price);
    if (product.isAvaliable) {
        console.log("Product is Avaliable");
    }
}
var TShirt = {
    name: "T-Shirt",
    price: 100,
    isAvaliable: true
};
showDetailsProduct(TShirt);
function showDetailsUser(user) {
    console.log("Name: " + user.name);
    if (user.role) {
        console.log("Role: " + user.role);
    }
    if (user.age) {
        console.log("Age: " + user.age);
    }
}
var user1 = { name: "Tobias", age: 8 };
var user2 = { name: "Peter", role: "Latire", age: 5 };
var user3 = { name: "John" };
showDetailsUser(user1);
showDetailsUser(user2);
showDetailsUser(user3);
var star1 = { nameStar: "Sun", typeStar: "G" };
console.log(star1.nameStar + " " + star1.typeStar);
var coords = {
    x: 10
};
coords.y = 20;
coords.z = 30;
console.log(coords);
var human = {
    name: "John",
    age: 30
};
var superHuman = {
    name: "Batman",
    age: 40,
    superPowers: ["fly", "invisibility"]
};
console.log(human);
console.log(superHuman);
var hollowKnight = {
    name: "HollowKnight",
    type: "Knight",
    caliber: 4
};
console.log(hollowKnight);
// 7 - readonly array
var massas = ["canelone", "espaguete", "rondeli"];
console.log(massas);
massas.forEach(function (item) {
    console.log("Massa: " + item);
});
massas.map(function (item) {
    return "Massa: " + item;
});
console.log(massas);
var P1 = [2, -6, 8];
var user = ["Tobias", 8];
console.log(user[0]);
//9 - Tuples with readonly
function showNumbers(numbers) {
    console.log(numbers[0]);
    console.log(numbers[1]);
}
showNumbers([1, 2]);
