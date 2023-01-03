const getSkewersCount = (grill) => {
  let vegetariansCount = 0;
  let nonVegetariansCount = 0;

  for (let skewer of grill) {
    const hasMeat = skewer.includes('x');
    const isVegetarian = skewer.includes('-o') && !hasMeat

    if (isVegetarian) {
      vegetariansCount++;
    } else if(hasMeat) {
      nonVegetariansCount++;
    }
  }
  return [vegetariansCount, nonVegetariansCount];
};

module.exports = { getSkewersCount };