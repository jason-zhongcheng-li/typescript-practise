import TreeNode from "../tree-node";

describe("[Done] Same Binary Tree test", () => {
  // Input: (p = [1, 2, 3]), (q = [1, 2, 3]);
  // Output: true;

  // Input: (p = [1, 2]), (q = [1, null, 2]);
  // Output: false;

  it("Solution 1", () => {
    const isSameTree = (p: TreeNode | null, q: TreeNode | null): boolean => {
      if (!p && !q) {
        return true;
      }

      if (p?.val === q?.val) {
        let flag = true;
        if (isSameTree(p.left, q.left)) {
          flag = isSameTree(p.right, q.right);
        } else {
          flag = false;
        }
        return flag;
      }
      return false;
    };

    const a = new TreeNode(1);
    const b = new TreeNode(1);
    const c = new TreeNode(2);

    a.left = c;
    b.right = c;

    const result = isSameTree(a, b);
    console.log("result = ", result);
  });
});
