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

  removeNode(i) {
    this.nodes[i] = false;
    this.removeLinks(i);
  }

  addLink(i, j) {
    var l = this.links[i];
    if (!l.includes(j)) l.push(j);
    this.nodes[i] = this.nodes[j] = true;
  }

  removeLink(i, j) {
    var l = this.links[i];
    var n = l.indexOf(j);
    if (n >= 0) l.splice(n, 1);
  }

  removeLinks(i) {
    this.links[i].length = 0;
  }
}
module.exports = DiGraph;
