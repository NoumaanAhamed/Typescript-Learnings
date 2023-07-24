// export function greet(person: { name: string; age: number }): string {
//   return "Hello " + person.name + " of age " + person.age;
// }

//!but for multiple persons you cant type the object every time

interface PersonGenderProps {
  gender: string;
  orientation: string;
  pronouns: string;
}

interface PersonInterface {
  name: string;
  age: number;
  genderProps: PersonGenderProps;
  // greet(): string;
  //   greetAge(): string; //!the class complains
}

// interface AnimalInterface extends PersonGenderProps {
//   name: string;
//   //! gender: string; //adds this by extending
//   // orientation: string;
//   // pronouns: string;
// }

export function greet(person: PersonInterface): string {
  return "Hello " + person.name + " of age " + person.age;
}

console.log(
  greet({
    name: "Noumaan",
    age: 20,
    genderProps: {
      gender: "male",
      orientation: "straight",
      pronouns: "he/him",
    },
  })
);

//* interfaces can be implemented by classes

// class Person implements PersonInterface {
//   name: string; //! specific to ts
//   age: number;

//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
//   greet() {
//     return "Hi " + this.name;
//   }
// }

// const personObject = new Person("noumaan", 20);
// console.log(personObject.greet());
