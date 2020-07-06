//Objective is to search for a value in a BST.

class Node {
    constructor(left, right, val) {
      this.left = left
      this.right = right
      this.val = val
    }
}
  
class Tree {
    constructor(root) {
      this.root = null
    }
  
    createRoot(val) {
      this.root = new Node(null, null, val)
    }
  
    addLeftNode(node, val) {
      node.left = new Node(null, null, val)
    }
  
    addRightNode(node, val) {
      node.right = new Node(null, null, val)
    }
}

let tree = new Tree()
tree.createRoot(4)
tree.addLeftNode(tree.root, 2)
tree.addRightNode(tree.root, 7)
tree.addLeftNode(tree.root.left, 1)
tree.addRightNode(tree.root.left, 3)


//O(n) solution that does a dfs traversal through the tree to find the place
//to insert.

function search(node, val) {
    if (!node) {
        return null
    }

    if (node.val == val) {
        return node
    } else if (val > node.val) {
        node.right = search(node.right, val)
    } else {
        node.left = search(node.left, val)
    }

    return node
}
return search(tree.root, 7)