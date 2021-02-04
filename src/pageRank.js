function pageRank(x, o) {
  var order = x.order();
  var {damping, convergence} = o;
  var ranks = new Array(order).fill(0).map(() => 1/order);
  do {
    var r = new Array(order).fill((1-damping)/order);
    for (var i=0; i<order; i++) {
      var d = x.links[i].length;
      for (j of x.links[i])
        r[j] += damping*ranks[i]/d;
    }
    var e = 0;
    for (var i=0; i<order; i++)
      e += Math.abs(ranks[i] - r[i]);
    ranks = r;
  } while (e > convergence);
  return ranks;
}
module.exports = pageRank;
