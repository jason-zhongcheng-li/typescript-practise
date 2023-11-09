import * as assert from 'assert';

/*
Given an integer n, for every integer i <= n, 
the task is to print “FizzBuzz” if i is divisible by 3 and 5, 
“Fizz” if i is divisible by 3, “Buzz” if i is divisible by 5 or i (as a string) 
if none of the conditions are true.
*/

describe('FizzBuzz test', () => {
  it('Solution 1', () => {
    const fizzBuzz = (num: number): string[] => {
      const result = [] as string[];

      let i = 1;
      while (i <= num) {
        if (i % 15 === 0) {
          result.push('FizzBuzz');
          i++;
          continue;
        }
        if (i % 3 === 0) {
          result.push('Fizz');
        } else if (i % 5 === 0) {
          result.push('Buzz');
        } else {
          result.push(i.toString());
        }
        i++;
      }
      return result;
    };
    console.log(fizzBuzz(19));
  });
});
