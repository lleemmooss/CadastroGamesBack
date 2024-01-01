/*function myDecorator(): any
{
    console.log("Iniciando decorator");
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor)
    {
        console.log("Executando decorator");
        console.log(target);
        console.log(propertyKey);
        console.log(descriptor);
    };
}

class myClass 
{
    @myDecorator()
    testing()
    {
        console.log("Terminando execução do método...");
    }
}

const myClassInstance = new myClass();

myClassInstance.testing();

// 2 - multiple decorators

function a(): any
{
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor)
    {
        console.log("Executando A.");
        console.log(target);
        console.log(propertyKey);
        console.log(descriptor);
    };
}


function b(): any
{
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor)
    {
        console.log("Executando B.");
        console.log(target);
        console.log(propertyKey);
        console.log(descriptor);
    };
}

class multipleDecorators
{
    @a()
    @b()
    testing()
    {
        console.log("Terminando execucao");
    }
}

const multipleDecoratorsInstance = new multipleDecorators();

multipleDecoratorsInstance.testing();

// 3 - Class decorator

function classDec(constructor: Function) 
{
    console.log(constructor);
    if (constructor.name === "User")
    {
        console.log("Criando usuario");
    }
}

@classDec
class User
{
    name
    constructor(name: string)
    {
        this.name = name;
    }

}

const lemos = new User("Lemos");
console.log(lemos);
console.log(lemos.name);

// 4 - method decorator

function enumerable (value: boolean) 
{
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor)
    {
        console.log(descriptor)
        descriptor.enumerable = value;
    }
}

class Machine
{
    name;

    constructor(name: string) {
        this.name = name;
    }

    @enumerable(false)
    showName()
    {
        console.log(this)
        console.log("O nome da maquina eh: " + this.name);
    }
}

const naboris = new Machine("Naboris")

naboris.showName(); 