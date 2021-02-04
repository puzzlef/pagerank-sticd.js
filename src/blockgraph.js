const DiGraph = require('./DiGraph');


function blockgraph(x, comps) {
  var a = new DiGraph(comps.length);
  var blocks = new Array(x.order()).fill(0);
  for (var c=0, C=comps.length; c<C; c++) {
    for (var i of comps[c])
      blocks[i] = c;
  }
  for (var i=0, I=x.order(); i<I; i++) {
    var i1 = blocks[i];
    a.addNode(i1);
    for (var j of x.links[i]) {
      var j1 = blocks[j];
      if (i1 !== j1) a.addLink(i1, j1);
    }
  }
  return a;
}
module.exports = blockgraph;
