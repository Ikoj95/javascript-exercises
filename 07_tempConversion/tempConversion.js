const convertToCelsius = function (num) {
  return Math.round(((num - 32) * 0.5556) * 10) / 10;
};

const convertToFahrenheit = function (num) {
  return Math.round(((num * 1.8) + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
