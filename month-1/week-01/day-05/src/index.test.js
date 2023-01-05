const { sockPairs } = require('./index.js');

test('deve retornar 0', () => {
  expect(sockPairs('ABCDEFGH')).toBe(0);
  expect(sockPairs('')).toBe(0);
});

test('deve retornar 1', () => {
  expect(sockPairs('AA')).toBe(1);
});

test('deve retornar 2', () => {
  expect(sockPairs('ABABC')).toBe(2);
});

test('deve retornar 3', () => {
  expect(sockPairs('CABBBACC')).toBe(3);
});

test('deve retornar 4', () => {
  expect(sockPairs('CABBACCC')).toBe(4);
  expect(sockPairs('AAAAAAAA')).toBe(4);
});
