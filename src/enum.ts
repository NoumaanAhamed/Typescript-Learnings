type Arithmetic = "add" | "sub" | "div" | "mul";

function calculatedSum(a: number, b: number, type: Arithmetic) {
  console.log(type);
  return 1;
}

enum Arithmetic2 {
  Add,
  Sub,
  Div,
  Mul,
}

function calculatedSum2(a: number, b: number, type: Arithmetic2) {
  console.log(type);

  return 1;
}

const answer = calculatedSum(1, 2, "div");
//! log(type) -> "div"
const answer2 = calculatedSum2(1, 2, Arithmetic2.Div); //*autocomplete and for simple use cases
//! log(type) -> "2" ,assigned by default (Add -> 0, sub -> 1 and so on) and can be returned
//for complex interfaces, use types
