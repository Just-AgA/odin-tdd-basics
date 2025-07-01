function calculator() {
  const add = (num1, num2) => {
    return num1 + num2;
  };

  const subtract = (num1, num2) => {
    return num1 - num2;
  };

  const divide = (num1, num2) => {
    if (num2 === 0) {
      return `Cannot divide by 0`;
    }

    return num1 / num2;
  };

  const multiply = (num1, num2) => {
    return num1 * num2;
  };

  return {
    add,
    subtract,
    divide,
    multiply,
  };
}

module.exports = calculator;
