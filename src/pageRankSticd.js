const blockgraph = require('./blockgraph');
const chains = require('./chains');
const components = require('./components');
const degree = require('./degree');
const identicals = require('./identicals');
const sort = require('./sort');
const subgraph = require('./subgraph');
const pageRank = require('./pageRank');

const OPTIONS = {
  damping: 0.85,
  convergence: 1e-5
};



function pageRankSticd(x, o) {
  console.log('STIC-D');
  var n = x.order();
  var ranks = new Array(n).fill(0).map(() => 1/n);
  var done = new Array(n).fill(false);
  // return pageRankScc(x, ranks, o);
  var cs = components(x);
  var y = blockgraph(x, cs);
  var yn = sort(y);
  for (var i=0, I=yn.length; i<I; i++) {
    var xi = subgraph(x, Array.prototype.concat.apply([], cs.slice(0, i+1)));
    ranks = pageRank(xi, o, ranks, done);
    done = done.map((d, i) => d || xi.nodes[i]);
  }
  return ranks;
}

function pageRankScc(x, ranks, o) {
  var n = x.order();
  console.log(x);
  var {damping, convergence} = Object.assign({}, OPTIONS, o);
  var all = [...new Array(n).keys()];
  var dupes = new Array(n).fill(-1);
  // handleIdenticals(x, dupes);
  do {
    var r = new Array(n).fill((1-damping)/n);
    for (var i=0; i<n; i++) {
      if (!x.nodes[i]) continue;
      var l = degree(x, i) > 0? x.links[i] : all;
      var d = l.length;
      for (j of l)
        if (dupes[j] < 0) r[j] += damping*ranks[i]/d;
    }
    var e = 0;
    for (var i=0; i<n; i++) {
      if (dupes[i] >= 0) r[i] = dupes[i]===i? ranks[dupes[i]] : r[dupes[i]];
      var d = Math.abs(Math.abs(ranks[i]) - r[i]);
      if (d <= convergence) dupes[i] = i;
      e += d;
    }
    ranks = r.map((v, i) => v<0? ranks[i] : v);
  } while (e > convergence);
  return ranks;
}

function handleIdenticals(x, dupes) {
  var gs = identicals(x);
  for (var g of gs) {
    var i = g[0];
    for (var j of g.slice(1))
      dupes[j] = i;
  }
}

function handleChains(x, dupes) {
  var gs = chains(x);
  for (var g of gs) {
    var i = g[0];
    for (var j of g.slice(1))
      dupes[j] = i;
  }
}
module.exports = pageRankSticd;
