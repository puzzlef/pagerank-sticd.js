const {pageRank, pageRankSticd} = require('./src');
const readMtx = require('./src/_readMtx');

const A = process.argv;


function main(pth) {
  var g = readMtx(pth);
  var ranks = pageRank(g);
  console.log(ranks);
  // var ranks = pageRankSticd(g);
  // console.log(ranks);
}
main(A[2]);
