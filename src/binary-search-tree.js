const { NotImplementedError } = require("../extensions/index.js");

// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.head = null;
  }
  root() {
    if (!this.head) {
      return null;
    }
    return this.head;
  }

  add(data) {
    this.head = popIn(this.head, data);
    function popIn(node, data) {
      if (!node) {
        return new Node(data);
      }
      if (node.data === data) {
        return node;
      }
      if (data < node.data) {
        node.left = popIn(node.left, data);
      } else {
        node.right = popIn(node.right, data);
      }
      return node;
    }
  }

  has(data) {
    return searchIn(this.head, data) !== null;
    function searchIn(node, data) {
      if (!node) {
        return null;
      }
      if (node.data === data) {
        return node;
      }
      if (data < node.data) {
        return searchIn(node.left, data);
      } else {
        return searchIn(node.right, data);
      }
    }
  }

  find(data) {
    return searchIn(this.head, data);
    function searchIn(node, data) {
      if (!node) {
        return null;
      }
      if (node.data === data) {
        return node;
      }
      if (data < node.data) {
        return searchIn(node.left, data);
      } else {
        return searchIn(node.right, data);
      }
    }
  }

  remove(data) {
    this.head = removeNode(this.head, data);
    function removeNode(node, data) {
      if (!node) {
        return null;
      }

      if (data === node.data) {
        if (!node.left && !node.right) {
          return null;
        }

        if (!node.left) {
          node = node.right;
          return node;
        }

        if (!node.right) {
          node = node.left;
          return node;
        }

        let minRight = node.right;
        while (minRight.left) {
          minRight = minRight.left;
        }

        node.data = minRight.data;
        node.right = removeNode(node.right, minRight.data);
        return node;
      }
      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else {
        node.right = removeNode(node.right, data);
        return node;
      }
    }
  }

  min() {
    if (!this.head) {
      return null;
    }

    let node = this.head;
    while (node.left) {
      node = node.left;
    }
    return node.data;
  }

  max() {
    if (!this.head) {
      return null;
    }

    let node = this.head;
    while (node.right) {
      node = node.right;
    }
    return node.data;
  }
}

module.exports = {
  BinarySearchTree,
};
