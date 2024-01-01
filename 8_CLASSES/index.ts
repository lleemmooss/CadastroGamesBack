// 1 - Campos em classe

class User // com valores não atribuídos
{
    name!: string
    age!: number
}

const Tobias = new User()
console.log(Tobias)
Tobias.name = "Tobias"

// 2 - Constructação
class NewUser 
{
    name
    age

    constructor(name: string, age: number)
    {
        this.name = name
        this.age = age
    }
}

const newTobias = new NewUser("Tobias2", 30)
console.log(newTobias)

// 3 - ReadOnly access
class Warrior
{
    name
    readonly mp = 50

    constructor(name: string)
    {
        this.name = name
    }    
}

const warrior = new Warrior("Esterabulo")
console.log(warrior)


//4 - Herands

class Character
{
    name

    constructor(name: string)
    {
        this.name = name
    }
}

const personagem = new Character("Jojo")

class NPC extends Character
{
    job
    age

    constructor(name: string, job: string, age: number)
    {
        super(name)
        this.job = job
        this.age = age
    }
}

const personagem2 = new NPC("Suelo", "Mago", 30)
console.log(personagem2)

// 5 - Metodos

class Dwarf
{
    name

    constructor(name: string)
    {
        this.name = name
    }

    greeting()
    {
        console.log ("Hey, STranger!")
    }
}

const jimmy = new Dwarf("Jimmy")
jimmy.greeting()


// Using this in class

class Weapon
{
    name
    typeWeapon
    power

    constructor(name: string, typeWeapon: string, power: number)
    {
        this.name = name
        this.typeWeapon = typeWeapon
        this.power = power
    }
    showDetails()
    {
        console.log(this.name)
        console.log(this.typeWeapon)
        console.log(this.power)
    }
}

const sword = new Weapon("MetalSword", "Sword", 10)
sword.showDetails()

// 6 - Getter 

class Person
{
    name
    surname

    constructor(name: string, surname: string)
    {
        this.name = name
        this.surname = surname
    }

    get fullName()
    {
        return this.name + " " + this.surname
    }
}

const person = new Person("Tobias", "Lemos")
console.log(person.fullName)

//8 - setters

class Coords
{
    x!: number
    y!: number

    set setfillx(x: number)
    {
        if (x === 0)
        {
            return
        }
        this.x = x
        console.log("Coordenada x inserida com sucesso")
    }

    set setfilly(y: number)
    {
        if (y === 0)
        {
            return
        }
        this.y = y
        console.log("Coordenada y inserida com sucesso")
    }

    get getCoords ()
    {
        return {x: this.x, y: this.y}
    }
}

const myCoords = new Coords()

myCoords.setfillx = 10
myCoords.setfilly = 20

console.log(myCoords)
console.log(myCoords.getCoords)

// 9 - Implements
interface showTitle
{
    itemTitle(): string
}

class blogPost implements showTitle
{
    title

    constructor(title: string)
    {
        this.title = title
    }

    itemTitle() {
        {
            return "O titulo do post e:" + this.title
        }
        
    }
}

const myPost = new blogPost("I am a blog post")

console.log(myPost.itemTitle())

class testingInterface implements showTitle
{
    title

    constructor(title: string)
    {
        this.title = title
    }
    
    itemTitle(): string 
    {
        return "O titulo é: " + this.title    
    }
}
// 10 - Override de metodos

class Base
{
    someMethod()
    {
        console.log("Something...")
    }
}

class Nova extends Base
{
    someMethod()
    {
        console.log("Testing anything...")
    }
}

const nova = new Nova()
nova.someMethod()

// 11 - Public

class C
{
    public x = 10
}

class D extends C
{
    
}

const InstanceD = new D()
console.log(InstanceD.x)

const CInstance = new C()

console.log(CInstance.x)

// 12 - Protected

class E 
{
    protected x = 10

    protected protectedMethod()
    {
        console.log("This method is protected!")
    }
}

class F extends E
{
    showX()
    {
        console.log ("X = " + this.x)
    }
}

const FInstance = new F()
FInstance.showX()

// 13 - Private

class privateClass
{
    private name = "Privada"

    showName()
    {
        return this.name
    }

    private privateMethod()
    {
        console.log("This method is private!")
    }
}

const pObjt = new privateClass()
// console.log(pObj.name) Forbidden!!!!

console.log(pObjt.showName())

// console.log(pObjt.privateMethod()) Forbidden!!

// 14 - Static

class StaticMembers
{
    static prop = "Teste Static"

    static staticMethod()
    {
        console.log("This is a static method!")
    }
}

console.log(StaticMembers.prop)
StaticMembers.staticMethod()

// 15 - Generic Class

class Item <T,U>
{
    first
    second

    constructor(first: T, second: U)
    {
        this.first = first
        this.second = second
    }
}

const item = new Item("Tobias", 30)
console.log(item)

// 16 Parameter properties

class  parameterProperties 
{
    constructor (public name: string, private qty: number, private isAvaliable: boolean)
    {
        this.name = name
        this.qty = qty
        this.isAvaliable = isAvaliable
    }

    get showQty()
    {
        return "QUantidade total: " + this.qty
    }
}

const newShirt = new parameterProperties("Camisa", 19, true)
console.log("Product: " + newShirt.name)
console.log(newShirt.showQty)

// 17 - Class expressions

const myClass = class <T>
{
    name

    constructor(name: T)
    {
        this.name = name
    }
}

const pessoa = new myClass("Joneas")
console.log(pessoa)

// 18 - Abstract class

abstract class bossEnemy
{
    abstract showName(): void;
}

class enemyExample extends bossEnemy
{
    name: string

    constructor(name: string)
    {
        super()
        this.name = name
    }

    showName(): void 
    {
        console.log("The name is: " + this.name)    
    }
}

const enemy = new enemyExample("Joneas")
enemy.showName();

// 19 - Class and relations

class Dog 
{
    name!: string
}

class Cat
{
    name!: string
}

const doguinho: Dog = new Cat()