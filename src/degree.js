// Finds out-degree of a node.
function degree(x, i) {
  return x.links[i].length;
}
module.exports = degree;
