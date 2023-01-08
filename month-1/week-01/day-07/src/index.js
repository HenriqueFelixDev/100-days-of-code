const mergeSortedArrays = (arr1, arr2) => {
  return [...arr1, ...arr2]
    .filter(num => num !== 0)
    .sort((a, b) => a - b);
};

module.exports = { mergeSortedArrays };
