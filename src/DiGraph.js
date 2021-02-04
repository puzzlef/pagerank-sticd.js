class DiGraph {
  constructor(n) {
    this.links = new Array(n).fill(null);
  }

  order() {
    return this.links.length;
  }

  addLink(i, j) {
    var l = this.links[i]||[];
    if (!l.includes(j)) l.push(j);
    this.links[i] = l;
  }
}
module.exports = DiGraph;
