// 1- Function Without Return

function sayHello(name: string): void
{
    console.log("Hello " + name);
}

// 2- Callback with argument

function greeting(name:string): string
{
    return "Hello " + name;
}

function preGreeting(f: (name: string) => string, userName: string)
{
   console.log("Preparing greeting");
   const greet = f(userName);
   console.log(greet);
}

preGreeting(greeting, "John");

//3 - Generic function
function firstElement<T> (arr: T[]): T
{
    return arr[0];
}

console.log(firstElement([1, 2, 3, 4, 5]));
console.log(firstElement(["a", "b", "c", "d"]));   
console.log(firstElement([true, "b", 2, "d"]));

function mergeObjects<U,T>(obj1: U, obj2: T)
{
    return {...obj1,...obj2};
}

const newObject = mergeObjects({name: "Tobias"}, {breed: "Caramelo", job: "Dog"});
console.log(newObject);

//4 - Constraints
function biggestNumber <T extends number|string>(a: T, b: T): T
{
    let biggest: T;
    if (+a > +b)
    {
        biggest = a;
    }
    else
    {
        biggest = b;
    }
    return biggest;
}
console.log(biggestNumber(1, 30));
console.log(biggestNumber("2", "1"));

//5 - Specifying argurment type
function mergeArrays<T>(arr1: T[], arr2: T[])
{
    return arr1.concat(arr2);
}

console.log(mergeArrays([1, 2, 3], [4, 5, 6]));
console.log(mergeArrays<number | string>([1,2], ["Very Bad", "Bad"]));

// 6 - Optional Parameter

function modernGreeting (name: string, greet?: string): string
{
    if (greet)
    {
        return greet + " " + name;
    }
    return "Hello " + name;

}
console.log (modernGreeting("Tobias"));
console.log (modernGreeting("Tobias", "Mr."));

// 7 - Default Parameter

function soma(n: number, m: number = 10): number
{
    return n+m;
}

console.log (soma(20));

// 8 - Unknown parameter

function doSomething (x: unknown)
{
    if (Array.isArray(x))
    {
        console.log(x[0]);
    } else if (typeof x === "number")
    {
        console.log(x+ " é um número");
    }
}

doSomething(1);
doSomething([2, 20, 40]);

// 9 - Never

function showErrorMessage(msg: string): never
{
    throw new Error(msg);   
}
//showErrorMessage("Something wrong...");

// 10 - Rest Operator
function sumAll (...n: number[])
{
    return n.reduce((number, sum) => sum + number);
}
console.log(sumAll(1, 2, 3, 4));

// 11   Destructor

function showProductDetails({name, price}: {name: string, price: number}):string
{
    return "o nome do produto é " + name +" e ele custa R$ " + price;
}

console.log(showProductDetails({name: "Ossinho", price: 10.00}))

