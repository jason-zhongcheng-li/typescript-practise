import * as assert from 'assert';

// https://leetcode.com/problems/length-of-last-word/description/

describe('Length of last word test', () => {

    // Input: s = "Hello World";
    // Output: 5

    it('Solution 1', () => {
        const lengthOfLastWord = (str: string): number => {
            let k = 0;
            let i = str.length - 1;

            while (i >= 0) {
                if (str.substring(i, i + 1).trim().length === 1) {
                    k++;
                } else if (k > 0) {
                    return k;
                }
                if (i === 0) {
                    return k;
                }
                i--;
            }

            return k;
        };

        const s = "H";
        const result = lengthOfLastWord(s);
        console.log('result = ', result);
    });
});