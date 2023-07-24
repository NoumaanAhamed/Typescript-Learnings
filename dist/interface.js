"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.greet = void 0;
function greet(person) {
    return "Hello " + person.name + " of age " + person.age;
}
exports.greet = greet;
console.log(greet({
    name: "Noumaan",
    age: 20,
    genderProps: {
        gender: "male",
        orientation: "straight",
        pronouns: "he/him",
    },
}));
//# sourceMappingURL=interface.js.map