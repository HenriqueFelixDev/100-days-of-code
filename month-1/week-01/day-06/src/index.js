const nextPrime = (num) => {
  if (isPrime(num)) {
    return num;
  }

  return nextPrime(num + 1);
};

const isPrime = (num) => {
  if (num <= 1) return false;

  if (num % 2 === 0) {
    return num === 2;
  }

  for (let i = 3; i < num / 2; i += 2) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

module.exports = { nextPrime };
