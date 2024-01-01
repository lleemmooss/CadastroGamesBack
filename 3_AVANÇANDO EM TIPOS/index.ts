// 1- ARRAYS
let numbers: number[] = [1, 2, 3];
//console.log(numbers);
numbers.push(4);
console.log(numbers[2]);
console.log(numbers[3]);

let names: string[] = ["Marcos", "Tobias"];
console.log(names[1]);

// 2 - Other Sintax for arrays
const nums: Array<number> = [100, 200, 300];
console.log(nums);
nums.push(300);
console.log(nums);

//3 - Any example
const arr1: any = ["Tobias", 1, true, {myDog: "Tobias"}];
console.log(arr1[1]);
console.log(arr1[0]);
console.log(arr1[2]);
console.log(arr1[3]);
console.log(arr1);

//4 Functions with data type return
function greetings(name: string): string
{
    return 'Olá, ' + name;
}

console.log(greetings("Tobias"));

//5 - Object types

function passCordinates(coord: {x: number, y: number})
{
    console.log ("X coordinate: " + coord.x);
    console.log ("Y coordinate: " + coord.y);
}

const ObjCoord = {x: 329, y: 84.2};

passCordinates(ObjCoord);


//6 - Optional Properties

function showNumbers (a: number, b: number, c?: number)
{
    console.log("A: " + a);
    console.log("B: " + b);
    if (c)
    {
        console.log("C: " + c);
    }
}

function advancedGreetings (firstName: string, lastName?: string)
{
    if (lastName !== undefined)
    {
        console.log ("Olá, " + firstName + " " + lastName + ", tudo bem?");
    }
    else
        console.log ("Olá, " + firstName);
}

advancedGreetings("Tobias");
advancedGreetings("Tobias", "Lemos");
showNumbers(10, 20, 30);
showNumbers(30, 40);

// 7 - Union Types

function showUserRole (role: boolean | string)
{
    if (typeof role === "boolean")
    {
        console.log("Usuario nao aprovado!");
    }
    else
    {
        console.log("A funcao do usuario eh: " + role);
    }
}

showUserRole(false);
showUserRole("Admin");

// 12 - Type Alias

type ID = string | number;
function showID (id: ID)
{
    console.log("O ID é: " + id);
}
showID(1);
showID("200");

// 13 - Interfaces

interface Point
{
    x: number;
    y: number;
    z: number;
}

function showCoords(obj: Point)
{
    console.log ("X: " + obj.x + ", Y: " + obj.y +", Z: " + obj.z);
}

const CoordObj: Point = {
    x: 100,
    y: 200,
    z: 300
}

showCoords (CoordObj);

// 14 - Literal Types

function showDirection (direction: "left" | "right" | "up" | "down")
{
    console.log("The directon is: " + direction);
}

showDirection("right");
showDirection("down");

// 15 - Bigint type

// let n: bigint;

// n = 100n;
