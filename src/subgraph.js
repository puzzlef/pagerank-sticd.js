const DiGraph = require('./DiGraph');


// Keeps only specified nodes.
function subgraph(x, nodes=[]) {
  var a = new DiGraph(0);
  a.nodes = x.nodes.map((_, i) => nodes.includes(i));
  a.links = x.links;
  // for (var i of nodes) {
  //   a.addNode(i);
  //   for (var j of x.links[i])
  //     if (nodes.includes(j)) a.addLink(i, j);
  // }
  return a;
}
module.exports = subgraph;
