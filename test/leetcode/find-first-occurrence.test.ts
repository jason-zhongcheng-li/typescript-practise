import * as assert from 'assert';

// https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/description/

describe('Find first occurrence test', () => {

    // Input: haystack = "sadbutsad", needle = "sad";
    // Output: 0;
    // Explanation: "sad" occurs at index 0 and 6.
    // The first occurrence is at index 0, so we return 0.

    it('Solution 1', () => {

        const findOccurence = (haystack: string, needle: string): number => {
            let i = 0;
            const count = needle.length;

            while (i <= haystack.length - count) {
                const currString = haystack.substring(i, i + count);
                console.log('currString = ', currString);
                if (currString === needle) {
                    return i;
                }
                i++;
            }

            return -1;
        };

        const haystack = "hello";
        const needle = "ll";

        const result = findOccurence(haystack, needle);
        console.log('result = ', result);

    });
});