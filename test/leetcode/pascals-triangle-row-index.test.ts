import * as assert from 'assert';

// https://leetcode.com/problems/pascals-triangle-ii/description/

describe('[Done] Pascals Triangle II test', () => {
  //   Input: rowIndex = 3;
  //   Output: [1, 3, 3, 1];

  it('Solution 1', () => {
    const generate = (rowIndex: number): number[] => {
      const result: number[][] = [];
      let i = 1;
      while (i <= rowIndex + 1) {
        const arr = [1];
        for (let k = 1; k < i; k++) {
          if (k === i - 1) {
            arr.push(1);
          } else {
            arr.push(result[i - 2][k - 1] + result[i - 2][k]);
          }
        }
        result.push(arr);
        i++;
      }
      return result[rowIndex];
    };

    const result = generate(8);
    console.log('result = ', result);
  });
});
