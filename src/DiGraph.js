class DiGraph {
  constructor(n) {
    this.nodes = new Array(n).fill(false);
    this.links = new Array(n).fill(null).map(() => []);
  }

  order() {
    return this.nodes.length;
  }

  addNode(i) {
    this.nodes[i] = true;
  }

  addLink(i, j) {
    var l = this.links[i];
    if (!l.includes(j)) l.push(j);
    this.nodes[i] = this.nodes[j] = true;
  }
}
module.exports = DiGraph;
