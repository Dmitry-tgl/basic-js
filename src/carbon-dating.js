const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  const MODERN_ACTIVITY= 15; 
  const HALF_LIFE_PERIOD= 5730;
  if (typeof sampleActivity == "string" && parseFloat(sampleActivity) > 0 && parseFloat(sampleActivity) <= MODERN_ACTIVITY) {
    let numberOfYears = (Math.log(MODERN_ACTIVITY / sampleActivity) * HALF_LIFE_PERIOD) / 0.693;
    return Math.ceil(numberOfYears);
  } else {
    return false;
  }
};

