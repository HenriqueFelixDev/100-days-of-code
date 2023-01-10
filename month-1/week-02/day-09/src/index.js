const getTrappedRain = (mapElevation) => {
  let trappedRain = 0;
  let pivot = -1;

  for (let i = 0; i < mapElevation.length; i++) {
    const containsElevationGreatherThanOrEqualPivot = 
      mapElevation.slice(i).findIndex((elevation) => elevation >= pivot) !== -1;

    if (pivot < mapElevation[i] || !containsElevationGreatherThanOrEqualPivot) {
      pivot = mapElevation[i];
      continue;
    }
    
    trappedRain += pivot - mapElevation[i];
  }

  return trappedRain;
}

module.exports = { getTrappedRain };
