interface MyObj {
    [code: number]: string;
}

describe('Big O notation', async () => {

    /*
    Let’s pretend we’re boarding a flight. We are given a flight length (an integer, ex. 160) 
    and an array of movies represented by their runtime( ex. [55,85,90,60,75]).
    We want to write a function that will return true or false depending 
    if there are two different movies that add up to exactly the flight length.
    */

    it('O(n2)', () => {
        const twoMovies = (flightLength: number, movies: number[]): boolean => {
            for (let i = 0; i <= movies.length; i++) {
                const remainNumber = flightLength - movies[i];
                console.log('remainNumber = ', remainNumber, ' new arry = ', movies.slice(i + 1, movies.length));
                if (movies.slice(i + 1, movies.length).some(num => remainNumber === num)) {
                    console.log('i = ', i);
                    return true;
                }
            }
        };

        const test = twoMovies(160, [55, 85, 90, 60, 75]);

        console.log('O(n2) result = ', test);
    });

    it('O(n)', () => {
        const twoMovies = (flightLength: number, movies: number[]): boolean => {
            const obj = {} as MyObj;
            for (let i = 0; i <= movies.length; i++) {
                const remainNumber = flightLength - movies[i];
                if (obj[remainNumber]) {
                    return true;
                } else {
                    obj[movies[i]] = 'value';
                }
            }
        };

        const test = twoMovies(160, [55, 85, 90, 60, 75]);

        console.log('O(n) result = ', test);
    });
});