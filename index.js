const {identicals} = require('./src');
const readMtx = require('./src/_readMtx');

const A = process.argv;


function main(pth) {
  var g = readMtx(pth);
  console.log(g);
  var groups = identicals(g);
  console.log(groups);
}
main(A[2]);
