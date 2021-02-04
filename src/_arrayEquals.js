// Checks if two arrays are equal (shallow).
function arrayEquals(x, y) {
  if (x.length !== y.length) return false;
  for (var i=0, I=x.length; i<I; i++)
    if (x[i] !== y[i]) return false;
  return true;
}
module.exports = arrayEquals;
