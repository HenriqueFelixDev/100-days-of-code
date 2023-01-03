const { getSkewersCount } = require('./index.js');

test('deve retornar [2, 3]', () => {
  const grill = [
    '--oooo-ooo--',
    '--xx--x--xx--',
    '--o---o--oo--',
    '--xx--x--ox--',
    '--xx--x--ox--'
  ];

  expect(getSkewersCount(grill)).toEqual([2, 3]);
});

test('deve retornar [3, 2]', () => {
  const grill = [
    '--oooo-ooo--',
    '--xxxxxxxx--',
    '--o---',
    '-o-----o---x--',
    '--o---o-----'
  ];

  expect(getSkewersCount(grill)).toEqual([3, 2]);
});

test('deve retornar [4, 1]', () => {
  const grill = [
    "--xo--x--ox--",
    "--xx--x--xx--",
    "--oo--o--oo--",
    "--xx--x--ox--",
    "--xx--x--ox--"
  ];

  expect(getSkewersCount(grill)).toEqual([1, 4]);
});

test('deve retornar [0, 0]', () => {
  const grill = [];

  expect(getSkewersCount(grill)).toEqual([0, 0]);
});

test('deve retornar [0, 4]', () => {
  const grill = [
    '--xxxx-xxx--',
    '--xxxxxxxx--',
    '--x---',
    '-x-----x---x--',
  ];

  expect(getSkewersCount(grill)).toEqual([0, 4]);
});

test('deve retornar [5, 0]', () => {
  const grill = [
    '--oooo-ooo--',
    '--ooooooooo--',
    '--o---',
    '-o-----o---o--',
    '--o---o-----'
  ];

  expect(getSkewersCount(grill)).toEqual([5, 0]);
});