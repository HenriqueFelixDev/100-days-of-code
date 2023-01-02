const { findNemo } = require('./index.js');

test('deve retornar I found Nemo at 1!', () => {
  expect(findNemo('Nemo is me')).toBe('I found Nemo at 1!');
});

test('deve retornar I found Nemo at 2!', () => {
  expect(findNemo('I Nemo am')).toBe('I found Nemo at 2!');
});

test('deve retornar I found Nemo at 4!', () => {
  expect(findNemo('I am finding Nemo !')).toBe('I found Nemo at 4!');
});

test('deve retornar I found Nemo at 7!', () => {
  expect(findNemo('I need to find the word Nemo !')).toBe('I found Nemo at 7!');
});

test('deve retornar um erro', () => {
  expect(() => findNemo('')).toThrow();
  expect(() => findNemo('100 days of code')).toThrow();
  expect(() => findNemo("NeMo isn't valid")).toThrow();
});