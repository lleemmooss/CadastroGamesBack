// 1 - Type Guarding

function sum (a: number | string, b: number | string)
 {
    if (typeof a === 'string' && typeof b === 'string')
    {
        console.log (parseFloat(a) + parseFloat(b));
    } 
    else if (typeof a === 'number' && typeof b === 'number')
    {
        console.log (a + b);
    }
    else
    {
        console.log ('Error');
    }
 }

 sum ("1", "2");
 sum (10, 20);
 sum("1", 3);

 // 2 - Checking if value exists

 function operation (arr: number[], operation?: string | undefined)
 {
    if (operation)
    {
        if (operation === "sum")
        {
            const sum = arr.reduce((i, total) => i + total);
            console.log (sum);
        }
        else if (operation === "multiply")
        {
            const multiply = arr.reduce((i, total) => i * total);
            console.log (multiply);
        }
    }
    else
    {
        console.log ('Please, define a valid operation');
    }
 }

 operation ([1, 2, 3]);
 operation ([1, 2, 3], "multiply");
 operation ([1, 2, 3], "sum");

 // 3 - InstanceOf

 class User
 {
    name: string; 
    constructor (name: string)
    {
        this.name = name;
    }
 }

 class superUser extends User
 {
    constructor (name: string)
    {
        super(name);
    }
 }

 const john = new User("John");
 const toby = new superUser ("Toby");

 console.log (john);
 console.log (toby);

 function userGreeting(user: object)
 {
    if (user instanceof superUser)
    {
        console.log ("Hello, my dear " + user.name);
    }
    else if (user instanceof User)
    {
        console.log ("Hello, " + user.name);
    }
    else
    {
        console.log ("Error!!!!!");
    }
 }

 userGreeting(john);
 userGreeting(toby);

// 4 - In Operator

class Dog 
{
    name
    breed
    constructor (name: string, breed?:string)
    {
        this.name = name;
        if (breed)
        {
            this.breed = breed;
        }
    }
}

const Tobias = new Dog ("Tobias", "Caramelo");
const Bob = new Dog ("Bob");

function showDogDetails (dog: Dog)
{
    if ("breed" in dog)
    {
        console.log ("The dog is a " + dog.breed);
    }
    else
    {
        console.log ("The dog is a SRD");
    }
}

showDogDetails (Tobias);
showDogDetails (Bob);