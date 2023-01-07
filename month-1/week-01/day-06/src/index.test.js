const { nextPrime } = require('./index.js');

test('deve retornar 2', () => {
  expect(nextPrime(0)).toBe(2);
  expect(nextPrime(1)).toBe(2);
  expect(nextPrime(2)).toBe(2);
});

test('deve retornar 3', () => {
  expect(nextPrime(3)).toBe(3);
});

test('deve retornar 5', () => {
  expect(nextPrime(4)).toBe(5);
  expect(nextPrime(5)).toBe(5);
});

test('deve retornar 7', () => {
  expect(nextPrime(6)).toBe(7);
  expect(nextPrime(7)).toBe(7);
});

test('deve retornar 11', () => {
  expect(nextPrime(8)).toBe(11);
  expect(nextPrime(9)).toBe(11);
  expect(nextPrime(10)).toBe(11);
  expect(nextPrime(11)).toBe(11);
});

test('deve retornar 13', () => {
  expect(nextPrime(12)).toBe(13);
  expect(nextPrime(13)).toBe(13);
});

test('deve retornar 17', () => {
  expect(nextPrime(14)).toBe(17);
  expect(nextPrime(15)).toBe(17);
  expect(nextPrime(16)).toBe(17);
  expect(nextPrime(17)).toBe(17);
});

test('deve retornar 19', () => {
  expect(nextPrime(18)).toBe(19);
  expect(nextPrime(19)).toBe(19);
});

test('deve retornar 23', () => {
  expect(nextPrime(20)).toBe(23);
  expect(nextPrime(21)).toBe(23);
  expect(nextPrime(22)).toBe(23);
  expect(nextPrime(23)).toBe(23);
});

test('deve retornar 29', () => {
  expect(nextPrime(24)).toBe(29);
  expect(nextPrime(25)).toBe(29);
  expect(nextPrime(26)).toBe(29);
  expect(nextPrime(27)).toBe(29);
  expect(nextPrime(28)).toBe(29);
  expect(nextPrime(29)).toBe(29);
});

test('deve retornar 31', () => {
  expect(nextPrime(30)).toBe(31);
  expect(nextPrime(31)).toBe(31);
});

test('deve retornar 491', () => {
  expect(nextPrime(488)).toBe(491);
  expect(nextPrime(489)).toBe(491);
  expect(nextPrime(490)).toBe(491);
  expect(nextPrime(491)).toBe(491);
});

test('deve retornar 997', () => {
  expect(nextPrime(994)).toBe(997);
  expect(nextPrime(995)).toBe(997);
  expect(nextPrime(996)).toBe(997);
  expect(nextPrime(997)).toBe(997);
});
