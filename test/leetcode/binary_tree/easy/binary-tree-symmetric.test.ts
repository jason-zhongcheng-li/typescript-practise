import TreeNode from '../tree-node';

describe('[Done] Symmetric Binary Tree test', () => {
  it('Solution 1', () => {
    const isSymmetric = (root: TreeNode | null): boolean => {
      const isMirror = (p: TreeNode | null, q: TreeNode | null): boolean => {
        if (!p && !q) {
          return true;
        }

        if (!p || !q) {
          return false;
        }

        if (p.val !== q.val) {
          return false;
        }

        if (isMirror(p?.left, q?.right) && isMirror(p?.right, q?.left)) {
          return true;
        }
        return false;
      };
      return isMirror(root, root);
    };

    const one = new TreeNode(1);
    const two = new TreeNode(2);
    const three = new TreeNode(3);
    const four = new TreeNode(4);

    // Input: root = [1,2,2,3,4,4,3]
    const a = one;
    a.left = two;
    a.right = two;
    a.left.left = three;
    a.left.right = four;
    a.right.left = four;
    a.right.right = three;

    const result = isSymmetric(a);
    console.log('result = ', result);
  });
});
