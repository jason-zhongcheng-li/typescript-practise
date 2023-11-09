import * as assert from 'assert';

// https://leetcode.com/problems/add-binary/description/

describe('Add binary test', () => {

    // Input: a = "11", b = "1";
    // Output: "100"

    it('Solution 1', () => {

        const addBinary = (a: string, b: string) => {
            const result = [] as string[];
            let arrA = a.split('');
            let arrB = b.split('');

            let i = arrA.length - 1;
            let k = arrB.length - 1;
            let carry = 0;

            while (i > -1 || k > -1 || carry > 0) {
                let numA = arrA[i] !== undefined ? Number(arrA[i]) : 0;
                let numB = arrB[k] !== undefined ? Number(arrB[k]) : 0;

                let sum = numA + numB + carry;

                if (sum > 1) {
                    sum -= 2;
                    carry = 1;
                } else {
                    carry = 0;
                }
                result.unshift(sum.toString());
                i--;
                k--;
            }
            return result.join('');
        };

        // const a = '10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101';
        // const b = '110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011';
        const a = '0';
        const b = '0';
        const result = addBinary(a, b);
        console.log('result = ', result);

    });
});