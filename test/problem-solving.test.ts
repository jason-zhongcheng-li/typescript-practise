interface MyObject {
    [code: number]: number;
}

describe('Problem solving', () => {

    const gcd = (a: number, b: number): number => {
        console.log('a = ', a, ' b = ', b);
        if (b == 0)
            return a;
        return gcd(b, a % b);
    };

    const lcm = (a: number, b: number): number => {
        return (a / gcd(a, b)) * b;
    };

    it.skip('Find intersect number in 2D array', () => {
        // We should return 3 and 10 because they are in both inner arrays
        const array = [[9, 10, 3], [7, 3, 6, 10]];

        const desctructure = (arrayInputs: number[][]): number[] => {
            let result = [] as number[];
            while (arrayInputs.length > 0) {
                const arr = arrayInputs.shift();
                result = [...result, ...arr];
            }
            return result;
        };

        const intersect = (numbers: number[]) => {
            const myMap: Map<number, number> = new Map();
            numbers.forEach(num => {
                let count = 1;
                if (myMap.has(num)) {
                    count = myMap.get(num) + 1;
                }
                myMap.set(num, count);
            });

            const result = [...myMap].filter(num => num[1] > 1).map(num => num[0]);
            return result;
        };

        const result = intersect(desctructure(array));
        console.log('result = ', result);
    });

    it.skip('GCD, greatest commen devidor', () => {
        const result = gcd(9, 4);
        console.log('gcd of 9 and 4 = ', result);
    });

    it.skip('LCM, least commen multipie of numbers', () => {
        const result = lcm(9, 4);
        console.log('lcm of 9 and 4 = ', result);
    });

    it('Found best Buy/Sell day to make Max Profit', () => {
        const stocks = [260, 180, 101, 120, 100, 310];

        const days = [] as number[][];
        let buyDay = -1;
        for (let i = 0; i < stocks.length - 1; i++) {
            if (stocks[i] < stocks[i + 1]) {
                if (buyDay < 0) {
                    buyDay = i;
                }
            } else if (stocks[i] > stocks[i + 1]) {
                if (buyDay >= 0) {
                    const day = [buyDay, i];
                    days.push(day);
                    buyDay = -1;
                }
            }
        }
        if (buyDay > 0) {
            days.push([buyDay, stocks.length - 1]);
        }

        console.log('days = ', days);
    });

    it('Max profit by trading stockes on given days', () => {
        const stocks = [1, 4, 8];
        let currDate = stocks.length - 1;

        let profit = 0;
        while (currDate > 0) {
            let lastDate = currDate - 1;
            while (lastDate >= 0) {
                if (stocks[currDate] > stocks[lastDate]) {
                    profit += stocks[currDate] - stocks[lastDate];
                }
                lastDate--;
            }
            currDate--;
        }

        console.log('max profit = ', profit);
    });

    it('Found cheapest accomadation cost for specific days', () => {
        const fees = [220, 198, 188, 240, 210, 200, 180];

        const foundDays = (days: number, fees: number[]): number[] => {
            let stays = [] as number[];
            const newFees = fees.concat(fees.slice(0, days - 1));
            console.log('newFees = ', newFees);
            let cheapestFee = Number.MAX_SAFE_INTEGER;
            let startDay = 0;
            for (let i = 0; i < fees.length; i++) {
                const fees = newFees.slice(i, i + days).reduce((pre, curr) => pre + curr, 0);
                console.log('fees = ', fees);
                if (cheapestFee > fees) {
                    cheapestFee = fees;
                    startDay = i;
                }
            }
            console.log('startDay = ', startDay);
            console.log('Array(3).keys() = ', [...Array(3).keys()]);
            stays = [...Array(3).keys()].map(num => num + startDay);
            return stays;
        };

        const result = foundDays(3, fees);
        console.log('day = ', result);
    });

    it('Compares the values of two arrays and returns an array of pairs where the indexes match in both arrays.', () => {
        const array1 = [3, 7, 9, 12, 15, 18, 32];
        const array2 = [3, 3, 7, 41, 76];

        const obj = {} as MyObject;
        array1.forEach((num, index) => { obj[num] = index; });

        const results = [] as number[][];
        array1.forEach(num => {
        });
    });

    //     * 2Sum 
    // Given an array of integers nums and an integer target, return the indices of two distinct numbers such that they add up to target.
    // Return[-1, -1] if it does not exist.

    //         Example:

    //     nums = [1, 2, 3, 4], target = 5;
    //     answer[0, 3];

    //     nums = [1, 4, 6], target = 5;
    //     answer[?, ?]; // [0, 1]

    //     nums = [1, 4, 3, 4], target = 8;
    //     answer[-1, -1];

    //     nums = [1, 2, 3, 4, 5], target = -5;
    //     answer[-1, -1]

    it('2Sum', () => {
        const findIndex = (target: number, nums: number[]): number[] => {
            const result = [];
            const myObj = {} as MyObject;
            for (let i = 0; i < nums.length; i++) {
                const indexes = [];
                const remainValue = target - nums[i];
                if (remainValue === nums[i]) {
                    break;
                }
                if (myObj[nums[i]]) {
                    indexes[0] = myObj[nums[i]];
                    indexes[1] = i;
                    console.log('indexes = ', indexes);
                    result.push(indexes);
                } else {
                    myObj[remainValue] = i;
                }
                console.log('myObj = ', myObj);
            }
            return result.length > 0 ? result[0] : [-1, -1];
        };

        const result1 = findIndex(5, [1, 2, 3, 4]);
        console.log('result1 = ', result1);
    });

});