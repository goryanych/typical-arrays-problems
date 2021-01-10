
exports.min = function min (array) {
  if (!array || !array.length) return 0;

  let minValue = 0;

  for (let elem of array) {
    if (minValue > elem) {
      minValue = elem;
    }
  }

  return minValue;
}


exports.max = function max (array) {
  if (!array || !array.length) return 0;

  let maxValue = 0;

  for (let elem of array) {
    if (maxValue < elem) {
      maxValue = elem;
    }
  }

  return maxValue;
}

exports.avg = function avg (array) {
  if (!array || !array.length) return 0;

  let avg = 0;

  for (let elem of array) {
    avg += elem;
  }

  avg /= array.length;

  return avg;
}
