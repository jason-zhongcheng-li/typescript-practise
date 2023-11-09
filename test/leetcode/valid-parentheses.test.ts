import * as assert from 'assert';

interface MyObj {
    [code: string]: string;
}

describe('Valid Parentheses test', () => {
    it('Solution 1', () => {

        // '()[]{}'
        const validP = (str: string): boolean => {
            if (str.length === 1 || str.length % 2 > 0) {
                return false;
            }

            const { index, label } = str.indexOf('()') > -1 ? { index: str.indexOf('()'), label: '()' } : str.indexOf('[]') > -1 ? { index: str.indexOf('[]'), label: '[]' } : str.indexOf('{}') > -1 ? { index: str.indexOf('{}'), label: '{}' } : { index: -1, label: '' };
            if (index > -1) {
                str = str.split(label).join('');

                if (str.length === 0) {
                    return true;
                } else {
                    return validP(str);
                }
            }
            return false;
        };

        const str = "()[]{}";
        const result1 = validP(str);
        console.log('result1 = ', result1);

        const str2 = "{[]}";
        const result2 = validP(str2);
        console.log('result2 = ', result2);

    });

    it('Solution 1', () => {

        // '()[]{}'
        const validP = (str: string): boolean => {
            if (str.length === 1 || str.length % 2 > 0) {
                return false;
            }

            const { index, label } = str.indexOf('()') > -1 ? { index: str.indexOf('()'), label: '()' } : str.indexOf('[]') > -1 ? { index: str.indexOf('[]'), label: '[]' } : str.indexOf('{}') > -1 ? { index: str.indexOf('{}'), label: '{}' } : { index: -1, label: '' };
            if (index > -1) {
                str = str.split(label).join('');

                if (str.length === 0) {
                    return true;
                } else {
                    return validP(str);
                }
            }
            return false;
        };

        const str = "()[]{}";
        const result1 = validP(str);
        console.log('result1 = ', result1);

        const str2 = "{[]}";
        const result2 = validP(str2);
        console.log('result2 = ', result2);

    });
});