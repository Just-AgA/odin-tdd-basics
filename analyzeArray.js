function analyzeArray(array) {
  if (!Array.isArray(array) || array.length === 0) {
    throw new Error('Input must be a non-empty array of numbers');
  }

  const sum = array.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  const average = sum / array.length;

  const min = Math.min(...array);

  const max = Math.max(...array);

  const length = array.length;

  return {
    average,
    min,
    max,
    length,
  };
}

module.exports = analyzeArray;
