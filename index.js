const {pageRank} = require('./src');
const readMtx = require('./src/_readMtx');

const A = process.argv;


function main(pth) {
  var g = readMtx(pth);
  console.log(g);
  var ranks = pageRank(g, {damping: 0.85, convergence: 1e-5});
  console.log(ranks);
}
main(A[2]);
