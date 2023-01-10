const { getTrappedRain } =  require('./index.js');

test('deve retornar 0', () => {
  expect(getTrappedRain([])).toBe(0);
  expect(getTrappedRain([1, 1, 1, 1, 1])).toBe(0);
  expect(getTrappedRain([1, 2, 3, 4, 5])).toBe(0);
  expect(getTrappedRain([5, 4, 3, 2, 1])).toBe(0);
});

test('deve retornar 6', () => {
  expect(getTrappedRain([0,1,0,2,1,0,1,3,2,1,2,1])).toBe(6);
});

test('deve retornar 8', () => {
  expect(getTrappedRain([])).toBe(0);
  expect(getTrappedRain([5, 4, 3, 2, 1, 2, 4])).toBe(8);
});

test('deve retornar 9', () => {
  expect(getTrappedRain([4,2,0,3,2,5])).toBe(9);
});
