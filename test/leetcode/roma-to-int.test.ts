// https://leetcode.com/problems/roman-to-integer/description/

import * as assert from 'assert';

interface RomaInt {
    [name: string]: number;
}

describe('Roma to Number test', () => {

    let romaNumObj = {} as RomaInt;

    beforeEach(() => {
        // I             1
        // V             5
        // X             10
        // L             50
        // C             100
        // D             500
        // M             1000;

        romaNumObj['I'] = 1;
        romaNumObj['V'] = 5;
        romaNumObj['X'] = 10;
        romaNumObj['L'] = 50;
        romaNumObj['C'] = 100;
        romaNumObj['D'] = 500;
        romaNumObj['M'] = 1000;
    });

    it('Solution 1', () => {

        const romaToInt = (romaStr: string): number => {
            let result = 0;
            const romaArr = romaStr.split('');
            for (let i = 0; i < romaArr.length; i++) {
                if (romaNumObj[romaArr[i]] < romaNumObj[romaArr[i + 1]]) {
                    result += romaNumObj[romaArr[i + 1]] - romaNumObj[romaArr[i]];
                    i++;
                } else {
                    result += romaNumObj[romaArr[i]];
                }
            }

            return result;
        };

        const result1 = romaToInt('III');
        console.log('result1 = ', result1);

        const result2 = romaToInt('LVIII');
        console.log('result2 = ', result2);

        const result3 = romaToInt('MCMXCIV');
        console.log('result3 = ', result3);
    });
});