const dfs = require('./dfs');
const dfsEnd = require('./dfsEnd');
const transpose = require('./transpose');


// Finds Strongly Connected Components (SCC) using Kosaraju's algorithm.
function components(x) {
  var nodes = [], a = [];
  // original dfs
  var visited = new Array(x.order()).fill(false);
  for (var i=0, I=x.order(); i<I; i++)
    dfsEnd(x, i, nodes, visited);
  // transpose dfs
  var y = transpose(x);
  visited.fill(false);
  while (nodes.length) {
    var i = nodes.pop();
    if (!visited[i]) a.push(dfs(y, i, [], visited));
  }
  return a;
}
module.exports = components;
