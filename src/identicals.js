const arrayEquals = require('./_arrayEquals');
const transpose = require('./transpose');
const degree = require('./degree');


// Finds groups of identical nodes (by in-links).
function identicals(x) {
  var n = x.order();
  var y = transpose(x), gs = [];
  var visited = new Array(n).fill(false);
  for (var i=0; i<n; i++) {
    if (degree(x, i) < 2) continue;
    identicalSiblings(x.links[i], x.links[i].map(j => y.links[j]), visited, gs);
  }
  return gs;
}

function identicalSiblings(xl, yl, visited, gs) {
  var d = xl.length;
  for (var i=0, g=[xl[i]]; i<d-1; i++) {
    if (visited[xl[i]]) continue;
    for (var j=i+1; j<d; j++) {
      if (visited[xl[j]]) continue;
      if (arrayEquals(yl[i], yl[j])) g.push(xl[j]);
    }
    if (g.length === 1) continue;
    for (var j of g) visited[j] = true;
    gs.push(g);
  }
}
module.exports = identicals;
