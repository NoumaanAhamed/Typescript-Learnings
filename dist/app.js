"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.greet = void 0;
console.log(greet({
    name: "Noumaan",
    age: 20,
}));
function greet(person) {
    return "Hello " + person.name + " of age " + person.age;
}
exports.greet = greet;
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        return "Hi " + this.name;
    }
}
const personObject = new Person("noumaan", 20);
console.log(personObject.greet());
//# sourceMappingURL=app.js.map