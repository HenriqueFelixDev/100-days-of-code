const findNemo = (sentence) => {
  const nemoIndex = sentence
    .split(' ')
    .findIndex(word => word === 'Nemo');

  if (nemoIndex < 0) {
    throw Error("I can't find Nemo :(");
  }

  return `I found Nemo at ${nemoIndex + 1}!`;
};

module.exports = { findNemo };