// 1 - Type Guarding
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function sum(a, b) {
    if (typeof a === 'string' && typeof b === 'string') {
        console.log(parseFloat(a) + parseFloat(b));
    }
    else if (typeof a === 'number' && typeof b === 'number') {
        console.log(a + b);
    }
    else {
        console.log('Error');
    }
}
sum("1", "2");
sum(10, 20);
sum("1", 3);
// 2 - Checking if value exists
function operation(arr, operation) {
    if (operation) {
        if (operation === "sum") {
            var sum_1 = arr.reduce(function (i, total) { return i + total; });
            console.log(sum_1);
        }
        else if (operation === "multiply") {
            var multiply = arr.reduce(function (i, total) { return i * total; });
            console.log(multiply);
        }
    }
    else {
        console.log('Please, define a valid operation');
    }
}
operation([1, 2, 3]);
operation([1, 2, 3], "multiply");
operation([1, 2, 3], "sum");
// 3 - InstanceOf
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    return User;
}());
var superUser = /** @class */ (function (_super) {
    __extends(superUser, _super);
    function superUser(name) {
        return _super.call(this, name) || this;
    }
    return superUser;
}(User));
var john = new User("John");
var toby = new superUser("Toby");
console.log(john);
console.log(toby);
function userGreeting(user) {
    if (user instanceof superUser) {
        console.log("Hello, my dear " + user.name);
    }
    else if (user instanceof User) {
        console.log("Hello, " + user.name);
    }
    else {
        console.log("Error!!!!!");
    }
}
userGreeting(john);
userGreeting(toby);
// 4 - In Operator
var Dog = /** @class */ (function () {
    function Dog(name, breed) {
        this.name = name;
        if (breed) {
            this.breed = breed;
        }
    }
    return Dog;
}());
var Tobias = new Dog("Tobias", "Caramelo");
var Bob = new Dog("Bob");
function showDogDetails(dog) {
    if ("breed" in dog) {
        console.log("The dog is a " + dog.breed);
    }
    else {
        console.log("The dog is a SRD");
    }
}
showDogDetails(Tobias);
showDogDetails(Bob);
