function dfsEnd(x, i, nodes=[], visited=null) {
  visited = visited || new Array(x.order()).fill(false);
  visited[i] = true;
  for (var j of x.links[i])
    if (!visited[j]) dfsEnd(x, j, nodes, visited);
  nodes.push(i);
  return nodes;
}
module.exports = dfsEnd;
