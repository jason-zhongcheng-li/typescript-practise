import * as assert from 'assert';

// https://leetcode.com/problems/pascals-triangle/description/

describe('[Done] Pascals Triangle test', () => {
  // Input: numRows = 5;
  // Output: [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]];

  it('Solution 1', () => {
    const generate = (num: number): number[][] => {
      const result: number[][] = [];
      let i = 1;
      while (i <= num) {
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
      return result;
    };

    const result = generate(8);
    console.log('result = ', result);
  });
});
