const analyzeArray = require('./analyzeArray');

test('Array gives object with properties', () => {
  expect(analyzeArray([2, 4, 1, 9, 5, 3])).toEqual({
    average: 4,
    min: 1,
    max: 9,
    length: 6,
  });
});

test('Throws error when array is empty', () => {
  expect(() => analyzeArray([])).toThrow(
    'Input must be a non-empty array of numbers'
  );
});
