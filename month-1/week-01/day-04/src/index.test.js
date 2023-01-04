const { getProgressDays } = require('./index.js');

test('deve retornar 0', () => {
  expect(getProgressDays([9, 9])).toBe(0);
  expect(getProgressDays([4, 3, 2, 1])).toBe(0);
  expect(getProgressDays([2])).toBe(0);
  expect(getProgressDays([])).toBe(0);
});

test('deve retornar 1', () => {
  expect(getProgressDays([6, 5, 4, 3, 2, 9])).toBe(1);
});

test('deve retornar 2', () => {
  expect(getProgressDays([3, 4, 1, 2])).toBe(2);
});

test('deve retornar 3', () => {
  expect(getProgressDays([10, 11, 12, 9, 10])).toBe(3);
  expect(getProgressDays([5.1, 6.5, 7.2, 7.7])).toBe(3);
});