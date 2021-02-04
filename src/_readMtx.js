const readFile = require('./_readFile');
const DiGraph = require('./DiGraph');


// Reads matrix market file as graph.
function readMtx(pth) {
  var ls = readFile(pth).split('\n');
  var [, order, size] = ls[1].split(' ').map(parseFloat);
  var g = new DiGraph(order);
  for (var n=2, N=ls.length; n<N; n++) {
    var [i, j, wt] = ls[n].split(' ').map(parseFloat);
    if (wt) g.addLink(i-1, j-1, wt);
  }
  return g;
}
module.exports = readMtx;
