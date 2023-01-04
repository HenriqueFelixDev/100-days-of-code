const getProgressDays = (runMilles) => {
  let progressDays = 0;

  for(let i = 1; i < runMilles.length; i++) {
    if (runMilles[i] > runMilles[i-1]) {
      progressDays++;
    }
  }

  return progressDays;
};

module.exports = { getProgressDays };