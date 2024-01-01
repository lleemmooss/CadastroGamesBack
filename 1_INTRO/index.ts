const firstName = "Tobias";
const numberCode = 1;
const bReturn = true;
const numero1: number = 10;
const numero2: number = 20;

function greetings(name: string)
{
    console.log("Olá " + name);
}

function soma(n1: number, n2: number): number
{
    return n1 + n2;
}

console.log("O resultado da soma " + soma(numero1, numero2));
greetings(firstName);
