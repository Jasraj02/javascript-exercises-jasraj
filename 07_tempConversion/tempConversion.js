
const convertToCelsius = function(temp) {
  var fahrenheitTemp = (temp-32)*(5/9);
  return Math.round(fahrenheitTemp);
};

const convertToFahrenheit = function(temp) {
  var celciusTemp = (temp*(9/5))+32;
  return Math.round(celciusTemp);
};


// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
