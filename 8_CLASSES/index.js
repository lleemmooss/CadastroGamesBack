// 1 - Campos em classe
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User // com valores não atribuídos
 = /** @class */ (function () {
    function User() {
    }
    return User;
}());
var Tobias = new User();
console.log(Tobias);
Tobias.name = "Tobias";
// 2 - Constructação
var NewUser = /** @class */ (function () {
    function NewUser(name, age) {
        this.name = name;
        this.age = age;
    }
    return NewUser;
}());
var newTobias = new NewUser("Tobias2", 30);
console.log(newTobias);
// 3 - ReadOnly access
var Warrior = /** @class */ (function () {
    function Warrior(name) {
        this.mp = 50;
        this.name = name;
    }
    return Warrior;
}());
var warrior = new Warrior("Esterabulo");
console.log(warrior);
//4 - Herands
var Character = /** @class */ (function () {
    function Character(name) {
        this.name = name;
    }
    return Character;
}());
var personagem = new Character("Jojo");
var NPC = /** @class */ (function (_super) {
    __extends(NPC, _super);
    function NPC(name, job, age) {
        var _this = _super.call(this, name) || this;
        _this.job = job;
        _this.age = age;
        return _this;
    }
    return NPC;
}(Character));
var personagem2 = new NPC("Suelo", "Mago", 30);
console.log(personagem2);
// 5 - Metodos
var Dwarf = /** @class */ (function () {
    function Dwarf(name) {
        this.name = name;
    }
    Dwarf.prototype.greeting = function () {
        console.log("Hey, STranger!");
    };
    return Dwarf;
}());
var jimmy = new Dwarf("Jimmy");
jimmy.greeting();
// Using this in class
var Weapon = /** @class */ (function () {
    function Weapon(name, typeWeapon, power) {
        this.name = name;
        this.typeWeapon = typeWeapon;
        this.power = power;
    }
    Weapon.prototype.showDetails = function () {
        console.log(this.name);
        console.log(this.typeWeapon);
        console.log(this.power);
    };
    return Weapon;
}());
var sword = new Weapon("MetalSword", "Sword", 10);
sword.showDetails();
// 6 - Getter 
var Person = /** @class */ (function () {
    function Person(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    Object.defineProperty(Person.prototype, "fullName", {
        get: function () {
            return this.name + " " + this.surname;
        },
        enumerable: false,
        configurable: true
    });
    return Person;
}());
var person = new Person("Tobias", "Lemos");
console.log(person.fullName);
//8 - setters
var Coords = /** @class */ (function () {
    function Coords() {
    }
    Object.defineProperty(Coords.prototype, "setfillx", {
        set: function (x) {
            if (x === 0) {
                return;
            }
            this.x = x;
            console.log("Coordenada x inserida com sucesso");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Coords.prototype, "setfilly", {
        set: function (y) {
            if (y === 0) {
                return;
            }
            this.y = y;
            console.log("Coordenada y inserida com sucesso");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Coords.prototype, "getCoords", {
        get: function () {
            return { x: this.x, y: this.y };
        },
        enumerable: false,
        configurable: true
    });
    return Coords;
}());
var myCoords = new Coords();
myCoords.setfillx = 10;
myCoords.setfilly = 20;
console.log(myCoords);
console.log(myCoords.getCoords);
var blogPost = /** @class */ (function () {
    function blogPost(title) {
        this.title = title;
    }
    blogPost.prototype.itemTitle = function () {
        {
            return "O titulo do post e:" + this.title;
        }
    };
    return blogPost;
}());
var myPost = new blogPost("I am a blog post");
console.log(myPost.itemTitle());
var testingInterface = /** @class */ (function () {
    function testingInterface(title) {
        this.title = title;
    }
    testingInterface.prototype.itemTitle = function () {
        return "O titulo é: " + this.title;
    };
    return testingInterface;
}());
// 10 - Override de metodos
var Base = /** @class */ (function () {
    function Base() {
    }
    Base.prototype.someMethod = function () {
        console.log("Something...");
    };
    return Base;
}());
var Nova = /** @class */ (function (_super) {
    __extends(Nova, _super);
    function Nova() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Nova.prototype.someMethod = function () {
        console.log("Testing anything...");
    };
    return Nova;
}(Base));
var nova = new Nova();
nova.someMethod();
// 11 - Public
var C = /** @class */ (function () {
    function C() {
        this.x = 10;
    }
    return C;
}());
var D = /** @class */ (function (_super) {
    __extends(D, _super);
    function D() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return D;
}(C));
var InstanceD = new D();
console.log(InstanceD.x);
var CInstance = new C();
console.log(CInstance.x);
// 12 - Protected
var E = /** @class */ (function () {
    function E() {
        this.x = 10;
    }
    E.prototype.protectedMethod = function () {
        console.log("This method is protected!");
    };
    return E;
}());
var F = /** @class */ (function (_super) {
    __extends(F, _super);
    function F() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    F.prototype.showX = function () {
        console.log("X = " + this.x);
    };
    return F;
}(E));
var FInstance = new F();
FInstance.showX();
// 13 - Private
var privateClass = /** @class */ (function () {
    function privateClass() {
        this.name = "Privada";
    }
    privateClass.prototype.showName = function () {
        return this.name;
    };
    privateClass.prototype.privateMethod = function () {
        console.log("This method is private!");
    };
    return privateClass;
}());
var pObjt = new privateClass();
// console.log(pObj.name) Forbidden!!!!
console.log(pObjt.showName());
// console.log(pObjt.privateMethod()) Forbidden!!
// 14 - Static
var StaticMembers = /** @class */ (function () {
    function StaticMembers() {
    }
    StaticMembers.staticMethod = function () {
        console.log("This is a static method!");
    };
    StaticMembers.prop = "Teste Static";
    return StaticMembers;
}());
console.log(StaticMembers.prop);
StaticMembers.staticMethod();
// 15 - Generic Class
var Item = /** @class */ (function () {
    function Item(first, second) {
        this.first = first;
        this.second = second;
    }
    return Item;
}());
var item = new Item("Tobias", 30);
console.log(item);
// 16 Parameter properties
var parameterProperties = /** @class */ (function () {
    function parameterProperties(name, qty, isAvaliable) {
        this.name = name;
        this.qty = qty;
        this.isAvaliable = isAvaliable;
        this.name = name;
        this.qty = qty;
        this.isAvaliable = isAvaliable;
    }
    Object.defineProperty(parameterProperties.prototype, "showQty", {
        get: function () {
            return "QUantidade total: " + this.qty;
        },
        enumerable: false,
        configurable: true
    });
    return parameterProperties;
}());
var newShirt = new parameterProperties("Camisa", 19, true);
console.log("Product: " + newShirt.name);
console.log(newShirt.showQty);
// 17 - Class expressions
var myClass = /** @class */ (function () {
    function class_1(name) {
        this.name = name;
    }
    return class_1;
}());
var pessoa = new myClass("Joneas");
console.log(pessoa);
// 18 - Abstract class
var bossEnemy = /** @class */ (function () {
    function bossEnemy() {
    }
    return bossEnemy;
}());
var enemyExample = /** @class */ (function (_super) {
    __extends(enemyExample, _super);
    function enemyExample(name) {
        var _this = _super.call(this) || this;
        _this.name = name;
        return _this;
    }
    enemyExample.prototype.showName = function () {
        console.log("The name is: " + this.name);
    };
    return enemyExample;
}(bossEnemy));
var enemy = new enemyExample("Joneas");
enemy.showName();
// 19 - Class and relations
var Dog = /** @class */ (function () {
    function Dog() {
    }
    return Dog;
}());
var Cat = /** @class */ (function () {
    function Cat() {
    }
    return Cat;
}());
var doguinho = new Cat();
