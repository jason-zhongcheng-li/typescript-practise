import TreeNode from '../tree-node';

/*
Given a binary tree, find its minimum depth.

The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

Note: A leaf is a node with no children.
*/

// https://leetcode.com/problems/minimum-depth-of-binary-tree/description/

describe('[Done] Get minimun depth of binary tree', () => {
  // Input: root = [3, 9, 20, null, null, 15, 7];
  // Output: 2;

  // console.group('****');
  // console.log('leftD = ', leftD);
  // console.log('rightD = ', rightD);
  // console.groupEnd();

  it('Solution 1', () => {
    function minDepth(root: TreeNode | null): number {
      if (!root) {
        return 0;
      }
      const leftD = minDepth(root.left);
      const rightD = minDepth(root.right);

      if (leftD > 0 && rightD > 0) {
        return Math.min(leftD, rightD) + 1;
      }
      return Math.max(leftD, rightD) + 1;
    }

    /*
                    1
                2       3
              4   5
            8
      */

    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.right = new TreeNode(3);
    root.left.left = new TreeNode(4);
    root.left.right = new TreeNode(5);
    root.left.left.left = new TreeNode(8);

    /*
        [2,null,3,null,4,null,5,null,6]

      */

    const result = minDepth(root);
    console.log('result = ', result);
  });
});
