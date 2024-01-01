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
*/
// 4 - method decorator
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
function enumerable(value) {
    return function (target, propertyKey, descriptor) {
        console.log(descriptor);
        descriptor.enumerable = value;
    };
}
var Machine = function () {
    var _a;
    var _instanceExtraInitializers = [];
    var _showName_decorators;
    return _a = /** @class */ (function () {
            function Machine(name) {
                this.name = (__runInitializers(this, _instanceExtraInitializers), void 0);
                this.name = name;
            }
            Machine.prototype.showName = function () {
                console.log(this);
                console.log("O nome da maquina eh: " + this.name);
            };
            return Machine;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _showName_decorators = [enumerable(false)];
            __esDecorate(_a, null, _showName_decorators, { kind: "method", name: "showName", static: false, private: false, access: { has: function (obj) { return "showName" in obj; }, get: function (obj) { return obj.showName; } }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
var naboris = new Machine("Naboris");
naboris.showName();
