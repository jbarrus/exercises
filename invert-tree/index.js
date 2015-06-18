module.exports = invertTree;

function invertTree(tree) {
  if (tree.left && tree.right) {
    var tmp = tree.left;
    tree.left = tree.right;
    tree.right = tmp;

    invertTree(tree.left);
    invertTree(tree.right);
  }
}
