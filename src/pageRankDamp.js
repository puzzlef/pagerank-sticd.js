const degree = require('./degree');

const OPTIONS = {
  damping: 0.85,
  convergence: 1e-5
};


function pageRankDamp(x, o, ranks=null, done=null) {
  var n = x.order();
  var {damping, convergence} = Object.assign({}, OPTIONS, o);
  var all = [...new Array(n).keys()];
  var ranks = ranks || new Array(n).fill(0).map(() => 1/n);
  var done = done || new Array(n).fill(false);
  var rounds = Math.log(convergence)/Math.log(damping);
  var converged = false;
  for (var k=0;; k++) {
    var _damping = converged? damping : Math.min(damping, damping*Math.exp((k-rounds/2)/(rounds/2)));
    var r = new Array(n).fill((1-_damping)/n);
    for (var i=0; i<n; i++) {
      if (!x.nodes[i]) continue;
      var l = degree(x, i) > 0? x.links[i] : all;
      var d = l.length;
      for (j of l)
        r[j] += _damping*ranks[i]/d;
    }
    var e = 0;
    for (var i=0; i<n; i++)
      if (!done[i]) e += Math.abs(ranks[i] - r[i]);
    ranks = r.map((r, i) => done[i]? ranks[i] : r);
    if (e < convergence) converged = true;
    if (e < convergence && _damping == damping) break;
  }
  console.log('Rounds', k);
  return ranks;
}
module.exports = pageRankDamp;
