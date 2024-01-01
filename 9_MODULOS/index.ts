// 1 - importacao de arquivos

import importGreet from './greet.js'
import {x} from './variable.js'
import {a, name, greet} from './multiples.js'
import {someName as newName} from './changename.js'
import * as myNumbers from './numbers.js'
import {Human} from './myTypes.js'

importGreet()

// 2 - import de variavel
console.log("import de variavel: " + x)


// 3 - Multiple import
console.log(a)
console.log(name)
greet()

// 4 - Alias

console.log(newName)

// 5 - import all
console.log(myNumbers)
const nx = myNumbers.n1
console.log(nx)
myNumbers.showNumber1()

// 6 - import tipos
class User implements Human
{
    username
    userage

    constructor(username: string, userage: number)
    {
        this.username = username
        this.userage = userage
    }
}

const joao = new User("Joao", 25)
console.log(joao)