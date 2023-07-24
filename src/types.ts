//!similar to interfaces
//!cannot extend
//!different in syntax

// type PersonType = {
//   name: string;
//   age: number;
//   //*can have other types/interfaces and vice-versa
// };

// function greet(person: PersonType): string {
//   return "Hi " + person.name + " of age " + person.age;
// }

// console.log(
//   greet({
//     name: "Noumaan",
//     age: 21,
//   })
// );

interface Circle {
  radius: number;
  borderWidth?: number; //*optional
}

interface Square {
  side: number;
}

interface Rectangle {
  width: number;
  height: number;
}

//* unions/intersections by types, not interfaces
type Shape = Rectangle | Circle | Square;

function renderShape(shape: Shape) {
  console.log("Rendered!");
}

function renderCircle(shape: Circle) {
  let something: number | undefined = shape.borderWidth;
  console.log("Rendered!");
}

renderShape({ radius: 10 });
