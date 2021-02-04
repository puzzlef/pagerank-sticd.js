function dfs(x, i=0, nodes=[], visited=null) {
  visited = visited || new Array(x.order()).fill(false);
  visited[i] = true;
  nodes.push(i);
  for (var j of x.links[i])
    if (!visited[j]) dfs(x, j, nodes, visited);
  return nodes;
}
module.exports = dfs;
