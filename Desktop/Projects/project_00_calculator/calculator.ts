class myCalculator {
  add(a: number, b: number): number {
    return a + b;
  }

  subtract(a: number, b: number): number {
    return a - b;
  }

  multiply(a: number, b: number): number {
    return a * b;
  }

  divide(a: number, b: number): number {
    if (b === 0) {
      throw new Error("Cannot divide by zero");
    }
    return a / b;
  }
}

// Usage
calculator = new myCalculator();
console.log(calculator.add(5, 3));      // Output: 8
console.log(calculator.subtract(7, 2)); // Output: 5
console.log(calculator.multiply(4, 6)); // Output: 24
console.log(calculator.divide(10, 2));  // Output: 5
console.log(calculator.divide(10, 0)); 