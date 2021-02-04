const degree = require('./degree');
const transpose = require('./transpose');


// Finds groups of chain nodes.
function chains(x) {
  var n = x.order();
  var y = transpose(x), gs = [];
  var visited = new Array(n).fill(false);
  for (var i=0; i<n; i++) {
    var j = i, g = [];
    while (!visited[j] && degree(x, j) === 1 && degree(y, j) === 1) {
      visited[j] = true; g.push(j);
      j = x.links[j][0];
    }
    if (g.length) gs.push(g);
  }
  return gs;
}
module.exports = chains;
