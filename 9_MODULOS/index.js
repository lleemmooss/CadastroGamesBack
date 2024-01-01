"use strict";
// 1 - importacao de arquivos
Object.defineProperty(exports, "__esModule", { value: true });
var greet_js_1 = require("./greet.js");
var variable_js_1 = require("./variable.js");
var multiples_js_1 = require("./multiples.js");
var changename_js_1 = require("./changename.js");
var myNumbers = require("./numbers.js");
(0, greet_js_1.default)();
// 2 - import de variavel
console.log("import de variavel: " + variable_js_1.x);
// 3 - Multiple import
console.log(multiples_js_1.a);
console.log(multiples_js_1.name);
(0, multiples_js_1.greet)();
// 4 - Alias
console.log(changename_js_1.someName);
// 5 - import all
console.log(myNumbers);
var nx = myNumbers.n1;
console.log(nx);
myNumbers.showNumber1();
// 6 - import tipos
var User = /** @class */ (function () {
    function User(username, userage) {
        this.username = username;
        this.userage = userage;
    }
    return User;
}());
var joao = new User("Joao", 25);
console.log(joao);
