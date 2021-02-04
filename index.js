const {components, blockgraph, pageRank, sort} = require('./src');
const readMtx = require('./src/_readMtx');

const A = process.argv;


function stic() {
  var comps = components(g);
  var h = blockgraph(g, comps);
  var hn = sort(h);
}


function main(pth) {
  var g = readMtx(pth);
  console.log(g);
  var comps = components(g);
  var h = blockgraph(g, comps);
  var hn = sort(h);
  var ranks = pageRank(g);
  console.log(ranks);
}
main(A[2]);
