const DiGraph = require('./DiGraph');


// Converts components into "block" nodes.
function blockgraph(x, comps) {
  var X = x.order();
  var C = comps.length;
  var b = blockIds(X, comps);
  var a = new DiGraph(C);
  for (var i=0; i<X; i++) {
    a.addNode(b[i]);
    for (var j of x.links[i])
      if (b[i] !== b[j]) a.addLink(b[i], b[j]);
  }
  return a;
}

function blockIds(X, comps) {
  var a = new Array(X).fill(0);
  for (var c=0; c<C; c++) {
    for (var i of comps[c])
      a[i] = c;
  }
  return a;
}
module.exports = blockgraph;
