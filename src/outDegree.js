function outDegree(x, i) {
  var {links} = x;
  return links[i]? links[i].length : 0;
}
module.exports = outDegree;
