const degree = require('./degree');

const OPTIONS = {
  damping: 0.85,
  convergence: 1e-5
};


function pageRank(x, o) {
  var n = x.order();
  var {damping, convergence} = Object.assign({}, OPTIONS, o);
  var all = [...new Array(n).keys()];
  var ranks = new Array(n).fill(0).map(() => 1/n);
  do {
    var r = new Array(n).fill((1-damping)/n);
    for (var i=0; i<n; i++) {
      var l = degree(x, i) > 0? x.links[i] : all;
      var d = l.length;
      for (j of l)
        r[j] += damping*ranks[i]/d;
    }
    var e = 0;
    for (var i=0; i<n; i++)
      e += Math.abs(ranks[i] - r[i]);
    ranks = r;
  } while (e > convergence);
  return ranks;
}
module.exports = pageRank;
