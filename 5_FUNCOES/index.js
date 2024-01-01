// 1- Function Without Return
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function sayHello(name) {
    console.log("Hello " + name);
}
// 2- Callback with argument
function greeting(name) {
    return "Hello " + name;
}
function preGreeting(f, userName) {
    console.log("Preparing greeting");
    var greet = f(userName);
    console.log(greet);
}
preGreeting(greeting, "John");
//3 - Generic function
function firstElement(arr) {
    return arr[0];
}
console.log(firstElement([1, 2, 3, 4, 5]));
console.log(firstElement(["a", "b", "c", "d"]));
console.log(firstElement([true, "b", 2, "d"]));
function mergeObjects(obj1, obj2) {
    return __assign(__assign({}, obj1), obj2);
}
var newObject = mergeObjects({ name: "Tobias" }, { breed: "Caramelo", job: "Dog" });
console.log(newObject);
//4 - Constraints
function biggestNumber(a, b) {
    var biggest;
    if (+a > +b) {
        biggest = a;
    }
    else {
        biggest = b;
    }
    return biggest;
}
console.log(biggestNumber(1, 30));
console.log(biggestNumber("2", "1"));
//5 - Specifying argurment type
function mergeArrays(arr1, arr2) {
    return arr1.concat(arr2);
}
console.log(mergeArrays([1, 2, 3], [4, 5, 6]));
console.log(mergeArrays([1, 2], ["Very Bad", "Bad"]));
// 6 - Optional Parameter
function modernGreeting(name, greet) {
    if (greet) {
        return greet + " " + name;
    }
    return "Hello " + name;
}
console.log(modernGreeting("Tobias"));
console.log(modernGreeting("Tobias", "Mr."));
// 7 - Default Parameter
function soma(n, m) {
    if (m === void 0) { m = 10; }
    return n + m;
}
console.log(soma(20));
// 8 - Unknown parameter
function doSomething(x) {
    if (Array.isArray(x)) {
        console.log(x[0]);
    }
    else if (typeof x === "number") {
        console.log(x + " é um número");
    }
}
doSomething(1);
doSomething([2, 20, 40]);
// 9 - Never
function showErrorMessage(msg) {
    throw new Error(msg);
}
//showErrorMessage("Something wrong...");
// 10 - Rest Operator
function sumAll() {
    var n = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        n[_i] = arguments[_i];
    }
    return n.reduce(function (number, sum) { return sum + number; });
}
console.log(sumAll(1, 2, 3, 4));
// 11   Destructor
function showProductDetails(_a) {
    var name = _a.name, price = _a.price;
    return "o nome do produto é " + name + " e ele custa R$ " + price;
}
console.log(showProductDetails({ name: "Ossinho", price: 10.00 }));
