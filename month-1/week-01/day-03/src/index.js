const getSkewersCount = (grill) => {
  let vegetariansCount = 0;
  let nonVegetariansCount = 0;

  for (let skewer of grill) {
    const hasMeat = skewer.includes('x')

    if (hasMeat) {
      nonVegetariansCount++;
    } else {
      vegetariansCount++;
    }
  }
  return [vegetariansCount, nonVegetariansCount];
};

module.exports = { getSkewersCount };