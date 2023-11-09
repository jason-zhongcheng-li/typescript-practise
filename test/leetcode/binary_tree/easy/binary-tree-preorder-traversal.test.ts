import TreeNode from '../tree-node';

describe('[Done] Binary tree preorder traversal test', () => {
  it('Solution 1', () => {
    const preorderTraversal = (root: TreeNode | null): number[] => {
      const result = [] as number[];
      const preorder = (root: TreeNode | null) => {
        if (!root) {
          return;
        }
        result.push(root.val);
        preorder(root.left);
        preorder(root.right);
      };
      preorder(root);
      return result;
    };

    const c = new TreeNode(3);
    const b = new TreeNode(2, c);
    const a = new TreeNode(1, null, b);

    const result = preorderTraversal(a);
    console.log('result = ', result);
  });
});
