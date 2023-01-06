const sockPairs = (socks) => {
  const socksHashMap = {};

  for(let sock of socks.split('')) {
    const sockCount = socksHashMap[sock] || 0;

    socksHashMap[sock] = sockCount + 1;
  }

  return Object.values(socksHashMap)
    .reduce((total, current) => {
      const currentPairs = Math.floor(current / 2);
      return total + currentPairs;
    }, 0);
};

module.exports = { sockPairs };
