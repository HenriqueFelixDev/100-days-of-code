const { mergeSortedArrays } = require('./index.js');

test('deve retornar [1,2,2,3,5,6]', () => {
  const arr1 = [1,2,3,0,0,0];
  const arr2 = [2,5,6];
  
  expect(mergeSortedArrays(arr1, arr2)).toEqual([1,2,2,3,5,6])
});

test('deve retornar [80, 211, 231, 251, 355, 358, 405, 441, 958, 979]', () => {
  const arr1 = [211, 251, 358, 405, 979, 0, 0, 0, 0, 0];
  const arr2 = [80, 231, 355, 441, 958];

  expect(mergeSortedArrays(arr1, arr2))
    .toEqual([80, 211, 231, 251, 355, 358, 405, 441, 958, 979])
});

test('deve retornar [6, 75, 242, 478, 517, 626, 647, 728, 746, 858]', () => {
  const arr1 = [6, 75, 626, 728, 858, 0, 0, 0, 0, 0];
  const arr2 = [242, 478, 517, 647, 746];

  expect(mergeSortedArrays(arr1, arr2))
    .toEqual([6, 75, 242, 478, 517, 626, 647, 728, 746, 858])
});
