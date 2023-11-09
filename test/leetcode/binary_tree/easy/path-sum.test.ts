import TreeNode from '../tree-node';

/*
Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.

A leaf is a node with no children.
*/

// https://leetcode.com/problems/path-sum/description/

describe('[Done] Path sum', () => {
  // Input: root = [3, 9, 20, null, null, 15, 7];
  // Output: 2;

  // console.group('****');
  // console.log('leftD = ', leftD);
  // console.log('rightD = ', rightD);
  // console.groupEnd();

  it('Solution 1', () => {
    function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
      const getSum = (root: TreeNode | null, sum: number, pathSum: number[]) => {
        if (!root) {
          return;
        }

        sum += root.val;

        if (!root.left && !root.right) {
          pathSum.push(sum);
        }

        getSum(root.left, sum, pathSum);
        console.log('root = ', root);
        getSum(root.right, sum, pathSum);
      };
      const pathSum = [] as number[];
      getSum(root, 0, pathSum);
      console.log('pathSum = ', pathSum);
      return pathSum.findIndex((sum) => sum === targetSum) > -1;
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

    const result = hasPathSum(root, 8);
    console.log('result = ', result);
  });
});
