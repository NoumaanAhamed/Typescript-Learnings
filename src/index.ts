// console.log("Hello");

// let age: number = 20
// if(age < 50)
// age += 10;
// console.log(age);

// let sales: number = 123_456_789;
// let course = 'TypeScript' ; //!ts detects itself

// let level; //!any type ,avoid it

// function render(document: any){ //*error without any
//     console.log(document);
    
// }

// // *let numbers: number[] = [1,2,'3']

// // let numbers = [] //! any array

// let numbers: number[] = []

// numbers.forEach(element => {
//   element.toFixed() //*intellisense
// });

// let user : [number,string] = [1,'Mosh'] //*tuple for key-value pairs(upto 2-3 items)

// user.push(1); //! no error , but avoid it

// const small = 1;
// const medium = 1;
// const large = 1;

// *or

//PascalCase
// const enum Size { Small = 1, Medium , Large } //* works without const as well

// let mySize : Size = Size.Medium;

// console.log(mySize);

function calculateTax(income: number,taxYear: number) : number{
    // let x = 10;
    if(taxYear < 2022)return income * 1.2;
    return income * 1.3;
}

// calculateTax(10_000,2022,7)
// calculateTax(10_000) //! taxYear = 2022 in parameters





