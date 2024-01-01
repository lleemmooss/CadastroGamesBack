// 1 - Generics
function showData(arg) {
    return "O dado é " + arg;
}
console.log(showData(1));
console.log(showData("teste"));
// 2 - Constrants in generic types
function showProductName(obj) {
    return "Product name is " + obj.name;
}
var myProduct = { name: "Door", color: "White", price: 306.87 };
console.log(showProductName(myProduct));
var dwarf = { name: "Eterobulos", strenght: 20, spells: "Heal", skills: "Invisibility" };
var paladin = { name: "Jusante", strenght: 30, spells: false, skills: false };
console.log(dwarf);
console.log(paladin);
// 4 - Type parameters
function getSomeKey(obj, key) {
    return "A chave " + key.toString + " está presente no objeto e tem o valor de " + obj[key];
}
var server = {
    hd: "2TB",
    ram: "32GB"
};
console.log(getSomeKey(server, "ram"));
function showCharName(obj, name) {
    return obj[name];
}
var myChar = {
    name: "Esterabulo",
    age: 30,
    spells: true
};
console.log(showCharName(myChar, "name"));
console.log(showCharName(myChar, "spells"));
// 6 - TypeOf Type Operator
var userName1 = "Tobias";
var userName2 = "Bob";
var x = "Toto";
console.log(x + " is type " + typeof (x));
var newItem = {
    name: "macã",
    n: 10,
    canUse: true
};
function showNameItem(nameItem) {
    return "O nome do item é " + nameItem;
}
console.log(showNameItem(newItem.name));
var someVar = 7;
