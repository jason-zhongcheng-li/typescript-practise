import TreeNode from '../tree-node';

// https://leetcode.com/problems/balanced-binary-tree/description/

describe('[Done] Height-Balanced binary tree', () => {
  // Given a binary tree, determine if it is height-balanced

  //   Input: root = [3, 9, 20, null, null, 15, 7];
  //   Output: true;

  // Input: root = [1, 2, 2, 3, 3, null, null, 4, 4];
  // Output: false;

  it('Solution 1 (Done)', () => {
    const isBalanceTreeNode = (root: TreeNode | null): boolean => {
      const exam = (root: TreeNode | null): [boolean, number] => {
        const result = [true, 0] as [boolean, number];
        if (!root) {
          return result;
        }

        const leftResult = exam(root.left);
        const rightResult = exam(root.right);

        const diff = Math.abs(leftResult[1] - rightResult[1]);

        if (leftResult[0] && rightResult[0] && diff <= 1) {
          result[0] = true;
        } else {
          result[0] = false;
        }

        const depth = Math.max(leftResult[1], rightResult[1]) + 1;
        result[1] = depth;
        return result;
      };
      const result = exam(root);

      return result[0];
    };

    /*
                    1
                2       3
            4       5
        8
      */

    // let root = new TreeNode(1);
    // root.left = new TreeNode(2);
    // root.right = new TreeNode(3);
    // root.left.left = new TreeNode(4);
    // root.left.right = new TreeNode(5);
    // root.left.left.left = new TreeNode(8);

    //   [1,2,2,3,null,null,3,4,null,null,4]

    /*
                    1
                2       2
            3               3
        4                       4
      */

    // const root = new TreeNode(1);
    // root.left = new TreeNode(2);
    // root.right = new TreeNode(2);
    // root.left.left = new TreeNode(3);
    // root.left.right = null;
    // root.right.left = null;
    // root.right.right = new TreeNode(3);
    // root.left.left.left = new TreeNode(4);
    // root.left.left.right = null;
    // root.right.right.left = null;
    // root.right.right.right = new TreeNode(4);

    /*
            [3,9,20,null,null,15,7]

                        3
                    9       20
                          15   7

      */
    const root = new TreeNode(3);
    root.left = new TreeNode(9);
    root.right = new TreeNode(20);
    root.right.left = new TreeNode(15);
    root.right.right = new TreeNode(7);

    isBalanceTreeNode(root);
  });
});
