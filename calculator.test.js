const calculator = require('./calculator');

test('calculations are correct', () => {
  const calc = calculator();
  expect(calc.add(2, 2)).toBe(4);
  expect(calc.subtract(4, 1)).toBe(3);
  expect(calc.divide(8, 4)).toBe(2);
  expect(calc.multiply(3, 5)).toBe(15);
  expect(calc.divide(3, 0)).toBe('Cannot divide by 0');
});
