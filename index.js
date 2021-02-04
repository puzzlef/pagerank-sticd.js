const {dfs} = require('./src');
const readMtx = require('./src/_readMtx');

const A = process.argv;


function main(pth) {
  var g = readMtx(pth);
  var nodes = dfs(g);
  console.log(nodes);
}
main(A[2]);
