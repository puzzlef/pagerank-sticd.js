const DiGraph = require('./DiGraph');


function transpose(x) {
  var a = new DiGraph(x.order());
  for (var i=0, I=x.links.length; i<I; i++) {
    for (var j of x.links[i])
      a.addLink(j, i);
  }
  return a;
}
module.exports = transpose;
