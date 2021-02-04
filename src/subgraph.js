const DiGraph = require('./DiGraph');


// Keeps only specified nodes.
function subgraph(x, nodes=[]) {
  var a = new DiGraph(x.order());
  for (var i of nodes) {
    a.addNode(i);
    for (var j of x.links[i])
      if (nodes.includes(j)) a.addLink(i, j);
  }
  return a;
}
module.exports = subgraph;
