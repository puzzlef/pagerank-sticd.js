const dfsEnd = require('./dfsEnd');


// Find topological sort of nodes.
function sort(x) {
  var nodes = [], n = x.order();
  var visited = new Array(n).fill(false);
  for (var i=0; i<n; i++)
    if (!visited[i]) dfsEnd(x, i, nodes, visited);
  return nodes.reverse();
}
module.exports = sort;
