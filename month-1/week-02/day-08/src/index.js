const getLetterCombinations = (num) => {
  const lettersMapping = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
  };

  if (num.length === 1) {
    return lettersMapping[num];
  }

  const mappedLetters = num
    .split('')
    .map(digit => lettersMapping[digit]);

  const combinations = [];

  for (let pivot = 0; pivot < mappedLetters.length - 1; pivot++) {
    for (let letterIndex = 0; letterIndex < mappedLetters[pivot].length; letterIndex++) {
      const currentLetter = mappedLetters[pivot][letterIndex];
      const restLetters = mappedLetters.slice(pivot + 1).flat()

      const combinedRestLetters = restLetters.map(restLetter => currentLetter + restLetter);
      combinations.push(...combinedRestLetters);
    }
  }

  return combinations;
};

module.exports = { getLetterCombinations };
