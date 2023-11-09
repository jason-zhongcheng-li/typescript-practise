import * as assert from 'assert';

// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/

describe('[Done] Buy Sell best days test', () => {
  // Input: prices = [7,1,5,3,6,4]
  // Output: 5
  // Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
  // Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

  it('Solution 1', () => {
    const maxProfit = (prices: number[]): number => {
      let min = prices[0];
      let max = 0;
      for (let i = 0; i < prices.length; i++) {
        if (min > prices[i]) {
          min = prices[i];
        }

        if (max < prices[i] - min) {
          max = prices[i] - min;
        }
      }
      return max;
    };

    // const prices = [7, 6, 4, 3, 1];
    // const prices = [7, 1, 5, 3, 6, 4];
    // const prices = [2, 1, 2, 1, 0, 1, 2];
    // const prices = [1, 2, 4];
    // const prices = [2, 1, 4, 5, 2, 9, 7];
    // const prices = [3, 3, 5, 0, 0, 3, 1, 4];
    const prices = [4, 7, 1, 2, 11];

    const result = maxProfit(prices);
    console.log('result = ', result);
  });
});
