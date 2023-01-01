const convertAgeToDays = (age) => {
  if (isNaN(age) || age < 0) {
    throw Error('Idade inválida!');
  }

  return age * 365;
};

module.exports = { convertAgeToDays };