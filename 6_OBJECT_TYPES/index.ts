// 1 - OBJECT TYPES FOR INTERFACE

interface Product
{
    name: string
    price: number
    isAvaliable: boolean    
}

function showDetailsProduct(product: Product)
{
    console.log("Product: " + product.name + " Price: "+  product.price)
    if (product.isAvaliable)
    {
        console.log("Product is Avaliable")
    }
}



const TShirt: Product = 
{
    name: "T-Shirt",
    price: 100,
    isAvaliable: true
}

showDetailsProduct(TShirt)

// 2- Optional properties in Interface

interface User
{
    name: string
    role?: string
    age?: number
}


function showDetailsUser(user: User)
{
    console.log("Name: " + user.name)
    if (user.role)
    {
        console.log("Role: " + user.role)
    }
    if (user.age)
    {
        console.log("Age: " + user.age)
    }
}

const user1: User = {name: "Tobias", age: 8}
const user2: User = {name: "Peter", role:"Latire", age:5}
const user3: User = {name: "John"}

showDetailsUser(user1)

showDetailsUser(user2)

showDetailsUser(user3)


// 3- Interface readonly property

interface Star 
{
    nameStar: string
    readonly typeStar: string
}

const star1: Star = {nameStar: "Sun", typeStar: "G"}

console.log(star1.nameStar +" "+ star1.typeStar)

// 4 -Index Signature
interface CoordObject
{
    [index: string]: number
}

let coords: CoordObject = {
    x: 10
}

coords.y = 20
coords.z = 30
console.log(coords)

// 5 - Extends Interface

interface Human
{
    name: string
    age: number
}

interface SuperHuman extends Human
{
    superPowers: string[]
}

const human: Human = {
    name: "John",
    age: 30
}

const superHuman: SuperHuman = 
{
    name: "Batman",
    age: 40,
    superPowers: ["fly", "invisibility"]
}

console.log(human)
console.log(superHuman)

// 6 Intersection Interface

interface Character 
{
    name: string
}

interface Gun
{
    type: string,
    caliber: number
}

type HumanWithGun = Character & Gun

const hollowKnight: HumanWithGun = 
{
    name: "HollowKnight",
    type: "Knight",
    caliber: 4
}

console.log(hollowKnight)


// 7 - readonly array

let massas: ReadonlyArray<string> = ["canelone", "espaguete", "rondeli"]

console.log(massas)

massas.forEach((item) => {
    console.log("Massa: " + item)
})

massas.map ((item) => {
    return "Massa: " + item
})

console.log(massas)

// 8 - Tuplas

type spacePosition = [number, number, number]
const P1 = [2, -6, 8]

type NameAndAge = [string, number]
const user: NameAndAge = ["Tobias", 8]
console.log(user[0])

//9 - Tuples with readonly
function showNumbers (numbers: readonly [number, number]) 
{
    console.log(numbers[0])
    console.log(numbers[1])
}
showNumbers([1,2])