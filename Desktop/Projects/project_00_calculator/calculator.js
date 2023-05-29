var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.add = function (a, b) {
        return a + b;
    };
    Calculator.prototype.subtract = function (a, b) {
        return a - b;
    };
    Calculator.prototype.multiply = function (a, b) {
        return a * b;
    };
    Calculator.prototype.divide = function (a, b) {
        if (b === 0) {
            throw new Error("Cannot divide by zero");
        }
        return a / b;
    };
    return Calculator;
}());
// Usage
var calculator = new Calculator();
console.log(calculator.add(5, 3)); // Output: 8
console.log(calculator.subtract(7, 2)); // Output: 5
console.log(calculator.multiply(4, 6)); // Output: 24
console.log(calculator.divide(10, 2)); // Output: 5
console.log(calculator.divide(10, 0));
