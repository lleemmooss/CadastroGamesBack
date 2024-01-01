// 1 - Generics
function showData<T>(arg: T): string
{
    return "O dado é " + arg
}
console.log(showData(1))
console.log(showData("teste"))

// 2 - Constrants in generic types
function showProductName <T extends {name:string}>(obj: T)
{
    return "Product name is " + obj.name
}
const myProduct = {name: "Door", color:"White", price: 306.87}
console.log(showProductName(myProduct))

// 3 - Generic with interfaces

interface Warrior<T, U>
{
    name: string;
    strenght: number;
    spells: T,
    skills: U
}

type Dwarf = Warrior<string, string>
type Paladin = Warrior <boolean, boolean>

const dwarf: Dwarf = {name: "Eterobulos", strenght:20, spells: "Heal", skills: "Invisibility"}
const paladin: Paladin = {name: "Jusante", strenght:30, spells: false, skills: false}

console.log(dwarf)
console.log(paladin)

// 4 - Type parameters
function getSomeKey<T, K extends keyof T>(obj: T, key: K)
{
    return "A chave " + key.toString + " está presente no objeto e tem o valor de " + obj[key]
}

const server = {
    hd: "2TB",
    ram: "32GB"
}

console.log(getSomeKey(server, "ram"))

// 5 - Keof type operator

type Character = {name: string, age: number, spells: boolean}

type C = keyof Character

function showCharName (obj: Character, name: C)
{
    return obj[name]
}

const myChar: Character =
{
    name: "Esterabulo",
    age: 30,
    spells: true
}

console.log(showCharName(myChar, "name"))
console.log(showCharName(myChar, "spells"))

// 6 - TypeOf Type Operator

const userName1: string = "Tobias"
const userName2: typeof userName1 = "Bob"

type X = typeof userName1
let x: X = "Toto"
console.log(x + " is type " + typeof(x))


//7 - Indexed Access Type

type Item = {name: string, n: number, canUse:boolean}
type name_item = Item["name"]
type status = Item["canUse"]

const newItem: Item =
{
    name: "macã",
    n: 10,
    canUse: true
}

function showNameItem(nameItem: name_item)
{
        return "O nome do item é " +nameItem
}

console.log(showNameItem(newItem.name))


// 8 - Conditional Types

interface A {}

interface B extends A {}

interface Teste
{
    showName(): String
}

type myType = B extends A ? number: string

const someVar: myType = 7

