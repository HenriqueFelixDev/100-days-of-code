const { getLetterCombinations } = require('./index.js');

test('deve retornar um array de combinações com 9 itens', () => {
  const combinations = getLetterCombinations('23');

  expect(combinations.length).toBe(9);

  expect(combinations).toContain('ad');
  expect(combinations).toContain('ae');
  expect(combinations).toContain('af');
  expect(combinations).toContain('bd');
  expect(combinations).toContain('be');
  expect(combinations).toContain('bf');
  expect(combinations).toContain('cd');
  expect(combinations).toContain('ce');
  expect(combinations).toContain('cf');
});

test('deve retornar um array vazio', () => {
  const combinations = getLetterCombinations('');

  expect(combinations.length).toBe(0);
});

test('deve retornar um array de combinações com 3 itens', () => {
  const combinations = getLetterCombinations('2');

  expect(combinations.length).toBe(3);
  
  expect(combinations).toContain('a');
  expect(combinations).toContain('b');
  expect(combinations).toContain('c');
});

test('deve retornar um array de combinações com 4 itens', () => {
  const combinations = getLetterCombinations('7');

  expect(combinations.length).toBe(4);

  expect(combinations).toContain('p');
  expect(combinations).toContain('q');
  expect(combinations).toContain('r');
  expect(combinations).toContain('s');
});