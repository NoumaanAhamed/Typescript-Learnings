"use strict";
function calculate(first, second, type) {
    switch (type) {
        case "+":
            return first + second;
        case "-":
            return first - second;
        case "*":
            return first * second;
        case "/":
            return first / second;
        default:
            return 0;
    }
}
let ans = calculate(2, 3, "+");
console.log(ans);
//# sourceMappingURL=calculator.js.map