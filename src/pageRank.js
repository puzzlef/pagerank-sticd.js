function pageRank(x, o) {
  var n = x.order();
  var {damping, convergence} = o;
  var ranks = new Array(n).fill(0).map(() => 1/n);
  do {
    var r = new Array(n).fill((1-damping)/n);
    for (var i=0; i<n; i++) {
      var d = x.links[i].length;
      if (d > 0) for (j of x.links[i])
        r[j] += damping*ranks[i]/d;
      else for (var j=0; j<n; j++)
        r[j] += damping*ranks[i]/n;
    }
    var e = 0;
    for (var i=0; i<n; i++)
      e += Math.abs(ranks[i] - r[i]);
    ranks = r;
  } while (e > convergence);
  return ranks;
}
module.exports = pageRank;
