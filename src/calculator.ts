function calculate(first: number,second: number,type: '+' | '-' | '*' | '/'): number{
    switch(type){
        case "+":
            return first + second
        case "-":
            return first - second
        case "*":
            return first * second
        case "/":
            return first / second
        default :
            return 0
    }
}

let ans: number = calculate(2,3,"+"); //!More Strict
console.log(ans);
