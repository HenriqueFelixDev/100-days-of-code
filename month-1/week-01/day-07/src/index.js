const mergeSortedArrays = (arr1, arr2) => {
  return [...arr1, ...arr2]
    .sort((a, b) => a - b)
    .filter(num => num !== 0);
};

module.exports = { mergeSortedArrays };
