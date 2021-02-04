const fs = require('fs');


// Reads file contents.
function readFile(pth) {
  var d = fs.readFileSync(pth, 'utf8');
  return d.replace(/\r?\n/g, '\n');
}
module.exports = readFile;
