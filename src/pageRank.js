const degree = require('./degree');

const OPTIONS = {
  damping: 0.85,
  convergence: 1e-5
};


function pageRank(x, o, ranks=null, done=null) {
  var n = x.order();
  var {damping, convergence} = Object.assign({}, OPTIONS, o);
  var all = [...new Array(n).keys()];
  var ranks = ranks || new Array(n).fill(0).map(() => 1/n);
  var done = done || new Array(n).fill(false);
  do {
    var r = new Array(n).fill((1-damping)/n);
    for (var i=0; i<n; i++) {
      if (!x.nodes[i]) continue;
      var l = degree(x, i) > 0? x.links[i] : all;
      var d = l.length;
      for (j of l)
        r[j] += damping*ranks[i]/d;
    }
    var e = 0;
    for (var i=0; i<n; i++)
      if (!done[i]) e += Math.abs(ranks[i] - r[i]);
    ranks = r.map((r, i) => done[i]? ranks[i] : r);
  } while (e > convergence);
  return ranks;
}
module.exports = pageRank;
