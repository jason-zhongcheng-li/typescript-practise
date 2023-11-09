// Given an integer x, return true if x is a
// palindrome
//     , and false otherwise.



//         Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
//     Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads - 121. From right to left, it becomes 121 -.Therefore it is not a palindrome.
//     Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left.Therefore it is not a palindrome.

describe('Palindrome number test', () => {
    it('Solution 1', () => {
        const isPalindrome = (num: number): boolean => {
            if (num < 0) {
                return false;
            }
            const length = num.toString().length;
            const count = Math.floor(length / 2);
            const left = num.toString().slice(0, count);
            const right = num.toString().slice(length - count, length);
            return left.toString() === right.toString().split('').reverse().join('');
        };

        const num = 123321;
        const result = isPalindrome(num);
        console.log('result = ', result);
    });
});