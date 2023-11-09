import TreeNode from '../tree-node';

// https://leetcode.com/problems/binary-tree-inorder-traversal/description/

describe('[Done] Binary tree inorder traversal test', () => {
  it('Solution 1', () => {
    const inorderTraversal = (root: TreeNode | null): number[] => {
      const result = [] as number[];
      const inorder = (root: TreeNode | null) => {
        if (!root) {
          return;
        }
        inorder(root.left);
        result.push(root.val);
        inorder(root.right);
      };
      inorder(root);
      return result;
    };

    const c = new TreeNode(3);
    const b = new TreeNode(2, c);
    const a = new TreeNode(1, null, b);

    inorderTraversal(a);
  });
});
