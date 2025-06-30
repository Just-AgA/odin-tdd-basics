const capitalize = require('./capitalize');

test('string to be String', () => {
  expect(capitalize('hello')).toBe('Hello');
  expect(capitalize('jimmy')).toEqual('Jimmy');
  expect(capitalize('gimli')).not.toBe('gimli');
});
