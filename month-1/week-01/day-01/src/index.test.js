const { convertAgeToDays } = require('./index.js');

test('deve retornar 0 dias', () => {
  expect(convertAgeToDays(0)).toBe(0);
});

test('deve retornar 365 dias', () => {
  expect(convertAgeToDays(1)).toBe(365);
  expect(convertAgeToDays('1')).toBe(365);
});

test('deve retornar 7300 dias', () => {
  expect(convertAgeToDays(20)).toBe(7300);
});

test('deve retornar 23725 dias', () => {
  expect(convertAgeToDays(65)).toBe(23725);
});

test('deve retornar um error', () => {
  expect(() => convertAgeToDays(-1)).toThrow();
  expect(() => convertAgeToDays('a')).toThrow();
});