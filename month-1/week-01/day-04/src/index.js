const getProgressDays = (runMilles) => {
  let progressDays = 0;

  for(let i = 0; i < runMilles.length; i++) {
    if (i === 0) continue;

    if (runMilles[i] > runMilles[i-1]) {
      progressDays++;
    }
  }

  return progressDays;
};

module.exports = { getProgressDays };