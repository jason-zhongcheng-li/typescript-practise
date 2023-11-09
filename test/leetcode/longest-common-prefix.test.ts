import * as assert from 'assert';

// https://leetcode.com/problems/longest-common-prefix/description/

describe('Longest Common Prefix test', () => {
    it('Solution 1', () => {

        const getLongestCommenPrefix = (strs: string[]): string => {
            if (!strs.length) {
                return '';
            }
            let prefix = strs[0];
            for (let i = 0; i < strs.length; i++) {
                while (strs[i].indexOf(prefix) !== 0) {
                    prefix = prefix.substring(0, prefix.length - 1);
                    console.log('prefix = ', prefix);
                    if (!prefix.length) {
                        return '';
                    }
                }
            }

            return prefix;
        };

        const strs = ["alower", "flow", "flight"];
        const result1 = getLongestCommenPrefix(strs);
        console.log('result1 = ', result1);

    });
});