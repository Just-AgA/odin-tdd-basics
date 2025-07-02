const reverseString = require('./reverseString');

test('reverse the string', () => {
  expect(reverseString('hello')).toEqual('olleh');
  expect(reverseString('try')).not.toBe('try');
  expect(reverseString('world')).toEqual('dlrow');
});
