import * as assert from 'assert';
import users from './fixture/users';
import ftp = require('basic-ftp');
import axios from 'axios';
const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;



import path = require('path');


describe('Test JavaScript Array functions', async () => {


  it('Array reverse()', () => {
    /*
    Reverses the order of the elements of an array
    -- the first becomes the last, and the last becomes the first.
    */
    const colors = ['Red', 'Green', 'Yellow'];
    const expected = ['Yellow', 'Green', 'Red'];
    const result = colors.reverse();
    assert.deepStrictEqual(result, expected);
  });

  it.skip('BSL ftp connection ', async function () {
    // this.timeout(100000);
    const client = new ftp.Client(30000);
    client.ftp.verbose = true;

    try {
      await client.access({
        // host: '119.148.90.40',
        host: 'https://buyselllease.com.au/',
        port: 2083,
        user: 'nziade',
        password: 'Welc0mep@55w0rd1',
        secure: true
      });
      console.log('client = ', await client.list());
      // done();
    } catch (err) {
      console.log(err);
    }

    client.close();
    await Promise.resolve();
  });


  it('test string match/search/sum', () => {
    const text = `The hardest part about getting pizza should be deciding which toppings you want, not how you’re going to order. A key factor in Domino’s rise to the top has been simplifying each step of the ordering process, providing customers with digital options that are convenient and fuss-free. “We heard time and time again that our customers want to be able to order as quickly and easily as possible,” says Mike Cox, operational intelligence architect at Domino’s. “They don't necessarily want to order through the website; they want to be able to just say something to their Echo.”

    To make ordering convenient and simple, Domino’s now has over 15 different digital ordering channels — including smart TVs, Amazon Echo and Google Home devices, mobile phone apps, Slack, social media and smart watches — that collectively generate 65 % of sales in the United States.

    Splunk makes sure that simplicity for the customer doesn’t mean overwhelming complexity for those managing the technology.“With all the additional channels to order through, we have to be able to monitor everything from security and operational aspects to new releases and developments — and that’s all fed into Splunk, ” Cox says.“Splunk helps us with every real - time transaction.We can understand what’s happening with our orders, services, website and applications.When we have all that data together, we can improve processes both internationally and domestically.”`;

    const textMap: Map<string, number> = new Map();

    text.split(' ').map(text => {
      let count = 1;
      if (textMap.has(text)) {
        count = textMap.get(text) + 1;
      }
      textMap.set(text, count);
    });

    const sortedMap = new Map([...textMap].sort((a, b) => b[1] - a[1]));

    console.log(sortedMap);

  });

  it('test setTimeOut ', () => {
    console.log('1');

    setTimeout(() => {
      console.log('2');
    }, 10);

    console.log('3');

    setTimeout(() => {
      console.log('4');
    });

    console.log('5');

    setTimeout(() => {
      console.log('6');
    }, -1);

    console.log('7');
  });




  // intersect([[9, 10, 3], [7, 3, 6, 10]]);
  //   // expecting [10, 3]

  //   intersect([[9, 10, 3], [7, 3, 6, 10], [3, 7]])
  //   // expecting [3]

  //   intersect([[2, 3], [4, 5]])
  //   // expecting []

  //   intersect([[2, 3], [3, 5], [5]))
  // // expecting []

  it('intersectoin 2D array', () => {

    const twoDArray = [[9, 10, 3], [7, 3, 6, 10]];
    const array = desctructure(twoDArray);
    const result = intersect(array);


  });

  function desctructure(arrInput: number[][] = []): number[] {
    if (arrInput && arrInput.length > 0) {
      let result = [] as number[];
      while (arrInput.length > 0) {
        const arr = arrInput.pop();
        result = [...result, ...arr];
      }
      return result;
    }
  }

  function intersect(arrInput: number[]): number[] {
    const myMap: Map<number, number> = new Map();
    arrInput.forEach(num => {
      let count = 1;
      if (myMap.has(num)) {
        count = myMap.get(num) + 1;
      }
      myMap.set(num, count);
    });
    const sortedMap = new Map([...myMap].sort((a, b) => b[1] - a[1]));
    console.log('sortedMap = ', sortedMap);
    const result = [...sortedMap].filter(obj => obj[1] > 1);
    console.log('result = ', result);
    return [];
  }



  //   findAllIndices('the fox jumps over the dog', 'the')
  //   // expecting [0, 19]

  //   findAllIndices('the fox jumps over the dog', 'brown')
  //   // expecting []

  //   findAllIndices('the fox jumps over the dog', 'o')
  //   // expecting [5, 14, 24]

  //   findAllIndices('the fox jumps over the dog', ' ');
  // // expecting [3, 7, 13, 18, 22]

  it('find index of value in string', () => {
    const str = 'the fox jumps over the dog';
    const value = ' ';
    const expect = [0, 19];

    const len = value.length;
    const result = [];
    for (let i = 0; i < str.length; i++) {
      let char = '';
      for (let j = 0; j < len; j++) {
        char = char.concat(str.charAt(i + j));
      }
      if (char === value) {
        result.push(i);
      }
    }
    console.log(result);
  });


  it('test split', () => {
    const a = "<p> </p>\n <ul>\n</ul>";
    // const result = solution(a);
    const b = a.replace(/\r?\n|\r/g, '').replace('<p></p>', '').replace('<ul></ul>', '').trim();
    const c = !!b;
    console.log('b = ', b);
    console.log('c = ', c);
  });

  it('test btoa', () => {
    const email = 'ebonygrinter18@hotmail.com';
    const value = Buffer.from(email).toString('base64');
    // const value = btoa(email);
    console.log('value = ', value);
    const value2 = Buffer.from(value, 'base64').toString('utf-8');
    console.log('value2 = ', value2);

    email.replace(/([0-z]{8})([0-z]{4})([0-z]{4})([0-z]{4})([0-z]{12})/, "$1-$2-$3-$4-$5");
    console.log('email guid = ', email);
  });

  function solution(N: number) {
    // write your code in JavaScript (Node.js 8.9.4)
    const bN = (N >>> 0).toString(2);
    console.log('bN = ', bN);
    const bNArr = bN.split('1');
    console.log('bNArr = ', bNArr);
    bNArr.shift();
    bNArr.pop();
    bNArr.sort((b, a) => b.length - a.length);


    console.log('bNArr = ', bNArr);
    return bNArr[0].length;

  }

  it('Test path', () => {

    const unix_timestamp = 1606816548750;
    // Create a new JavaScript Date object based on the timestamp
    // multiplied by 1000 so that the argument is in milliseconds, not seconds.
    const date = new Date(unix_timestamp);


    console.log(date.toLocaleDateString());

    console.log((Math.round(32.122323 * 100) / 100).toString());

  });

  it('Javascript destructure test', () => {
    const list = { 'me': { id: 1, firstName: 'Jason', lastName: 'Li' } };
    console.log(list['me']);
    const newMe = { id: 1, firstName: 'Zhongcheng', lastName: 'Li' };
    list['me'] = newMe;
    console.log(list['me']);
  });

  it('Javascript date test', () => {
    // const milliseconds = 1622514735233;
    const milliseconds = 1655244134000;
    const date = new Date(milliseconds).toISOString();
    console.log('date = ', date);
  });

  it('Stock Buy/Sell Max Profit', () => {
    const stocks = [100, 180, 260, 310, 40, 535, 695];
    let profit = 0;
    for (let i = 1; i < stocks.length; i++) {
      if (stocks[i] > stocks[i - 1]) {
        profit += stocks[i] - stocks[i - 1];
      }

    }
    console.log('profit = ', profit);
  });

  it('Max profit by trading stocks on given days', () => {
    const stocks = [1, 4, 8];

    let profit = 0;
    let currentDate = stocks.length - 1;
    while (currentDate > 0) {
      let lastDay = currentDate - 1;
      while (lastDay >= 0) {
        if (stocks[currentDate] > stocks[lastDay]) {
          profit += stocks[currentDate] - stocks[lastDay];
        }
        lastDay--;
      }
      currentDate = lastDay;
    }
    console.log('max profit = ', profit);

  });

  const sortFunc = (arr: number[]) => {
    const result = arr;
    // return result.sort((a, b) => a - b);
    return result.sort();
  };




  it('HackRank', () => {

    // const a = 'bcdbcdbcdbcd';
    // const b = 'bcdbcd';

    // const c = a.split(b);
    // if (!c.some(x => x.length > 0)) {
    //   console.log('c = ', c);
    // } else {
    //   console.log('no');
    // }

    // const arr = b.split('');
    // const n = Math.floor(arr.length / 2);

    // console.log('arr = ', arr);
    // console.log('n = ', n);
    // for (let i = 0; i < n; i++) {

    // }

    // // const arr = [1, -2, -7, 9, 1, -8, -5];
    // // const arr = [-4, 3, -9, 0, 4, 1];
    // const arr = [0, 0, -1, 1, 1];
    // // const arr = [0, 4, -3, 3, -6];
    // // const arr = [0, 100, 35, 0, 94, 40, 42, 87, 59, 0];

    // const sortArr = arr.sort((a, b) => a - b);
    // console.log('sortArr = ', sortArr);
    // let posNum = 0;
    // let negNum = 0;
    // sortArr.forEach((num, index) => {
    //   if (num < 0) {
    //     negNum++;
    //   }
    //   else if (num > 0) {
    //     posNum++;
    //   }
    // }
    // );

    // const zeoNum = arr.length - posNum - negNum;
    // console.log((Math.round(posNum * 1000000 / arr.length) / 1000000).toFixed(6));
    // console.log((Math.round(negNum * 1000000 / arr.length) / 1000000).toFixed(6));
    // console.log((Math.round(zeoNum * 1000000 / arr.length) / 1000000).toFixed(6));
    // console.log('neg = ', negNum);
    // console.log('pos = ', posNum);
    // console.log('zero = ', zeoNum);

    // const n = 6;
    // for (let i = 0; i < n; i++) {
    //   const out = [];
    //   for (let j = 0; j < n - i; j++) {
    //     out.push(' ');
    //   }
    //   for (let k = 0; k < i + 1; k++) {
    //     out.push('#');
    //   }
    //   // console.log(out.toString());
    //   console.log(out.slice(1).reduce((p, c) => p + c));
    // }

    // 1 1 1 0 0 0;
    // 0 1 0 0 0 0;
    // 1 1 1 0 0 0;
    // 0 0 2 4 4 0;
    // 0 0 0 2 0 0;
    // 0 0 1 2 4 0;
    // const arr: number[][];
    // let result: number[][] = [[]];
    // let maxSum = 0;
    // for (let i = 0; i < 4; i++) {
    //   for (let j = 0; j < 4; j++) {
    //     const a: number[][] = [[]];
    //     for (let k = 0; k < 3; k++) {
    //       const b: number[] = [];
    //       for (let m = 0; m < 3; m++) {
    //         if (m === 1 && (k === 0 || k === 2)) {
    //           b.push(0);
    //         } else if (k === 1 && (m === 0 || m === 2)) {
    //           b.push(0);
    //         } else {
    //           b.push(arr[i + k][j + m]);
    //         }
    //       }
    //       a.push(b);
    //     }
    //     const sum = a.map(obj => obj.reduce((p, c) => p + c)).reduce((p, c) => p + c);
    //     maxSum = maxSum >= sum ? maxSum : sum;
    //     if (sum > maxSum) {
    //       maxSum = sum;
    //       result = a;
    //     }
    //   }
    // }

    const gcd = (a: number, b: number): number => {
      if (b == 0)
        return a;
      return gcd(b, a % b);
    };

    const lcm = (a: number, b: number): number => {
      console.log('gcd(a, b) = ', gcd(a, b));
      return (a / gcd(a, b)) * b;
    };

    const s = "abbabbabbabbabbabb";
    const t = "abbabb";

    // Store the length of both strings
    let n = s.length, m = t.length;

    // Store LCM of n and m
    let l = lcm(n, m);
    // Temporary strings to store
    // concatenated strings
    let s1 = "", t1 = "";


    // Concatenate s1 (l / n) times
    for (let i = 0; i < l / n; i++) {
      console.log('s1 = ', s1);
      s1 += s;
    }

    // Concatenate t1 (l / m) times
    for (let i = 0; i < l / m; i++) {
      console.log('t1 = ', t1);
      t1 += t;
    }

    // If s1 and t1 are equal
    if (s1 == (t1)) {
      console.log('s1 : ', s1);
      console.log('t1 : ', t1);
    }

    // Otherwise, print -1
    // else {
    //   console.log('no');
    // }

    function isDivisible(s: string, t: string) {
      return !s.split(t).some(st => st.length > 0);
    }

    if (!isDivisible(s, t)) {

    };
    let result = s;
    let currentTSegment = '';
    for (let i = 1; i <= t.length; i++) {
      currentTSegment = t.slice(0, i);
      if (isDivisible(s, currentTSegment) && isDivisible(t, currentTSegment) && currentTSegment.length < result.length) {
        result = currentTSegment;
      } else {

      }

    }
    console.log('result = ', result);

  });

  // 'use strict';

  // const fs = require('fs');
  // const https = require('https');
  // const axios = require('axios');

  // process.stdin.resume();
  // process.stdin.setEncoding('utf-8');

  // let inputString = '';
  // let currentLine = 0;

  // process.stdin.on('data', function (inputStdin) {
  //   inputString += inputStdin;
  // });

  // process.stdin.on('end', function () {
  //   inputString = inputString.split('\n');
  //   main();
  // });

  // function readLine() {
  //   return inputString[currentLine++];
  // }

  // /*
  //  * Complete the function below.
  //  * Use console.log to print the result, you should not return from the function.
  //  * Base url: https://jsonmock.hackerrank.com/api/movies/search/?Title=
  //  */
  // async function asyncFetch(url, param) {
  //   let requestUrl = url;
  //   if (param?.title) {
  //     requestUrl = requestUrl.concat('Title=').concat(param.title.toString());
  //   }
  //   if (param?.page >= 1) {
  //     requestUrl = requestUrl.concat('&page=').concat(param.page.toString());
  //   }

  //   try {
  //     const res = (await axios.get(requestUrl)).data;
  //     return res;
  //   } catch (err) {
  //     console.log(err);
  //   }

  // }
  // // lol got your interest
  // // yea can't focus until I know why it broke
  // // knew it should work

  // async function getMovieTitles(substr) {
  //   let movies = [];
  //   let cur_page = 0;
  //   const url = 'https://jsonmock.hackerrank.com/api/movies/search/?';
  //   const result = await asyncFetch(url, { title: substr });
  //   movies = result.data;
  //   cur_page = result.total_pages;

  //   while (cur_page > 1) {
  //     const curr_result = await asyncFetch(url, { title: substr, page: cur_page });
  //     if (curr_result.data && curr_result.data.length > 0) {
  //       movies = movies.concat(curr_result.data);
  //       cur_page--;
  //     } else {
  //       break;
  //     }
  //   }
  //   const results = movies.map(movie => movie.Title);
  //   return results.sort();
  // }


  // async function main() {
  //   const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
  //   const _substr = readLine().trim();
  //   const results = await getMovieTitles(_substr);
  //   if (results.length > 0) {
  //     for (const result of results) {
  //       ws.write(`${result}\n`);
  //     }
  //   }

  //   ws.end();
  // }
  // async function asyncFetch(url, param) {
  //   let requestUrl = url;
  //   if (param?.title) {
  //     requestUrl = requestUrl.concat('Title=').concat(param.title.toString());
  //   }
  //   if (param?.page >= 1) {
  //     requestUrl = requestUrl.concat('&page=').concat(param.page.toString());
  //   }

  //   try {
  //     const res = (await axios.get(requestUrl)).data;
  //     return res;
  //   } catch (err) {
  //     console.log(err);
  //   }

  // }
  // // lol got your interest
  // // yea can't focus until I know why it broke
  // // knew it should work

  // async function getMovieTitles(substr) {
  //   let movies = [];
  //   let cur_page = 0;
  //   const url = 'https://jsonmock.hackerrank.com/api/movies/search/?';
  //   const result = await asyncFetch(url, { title: substr });
  //   movies = result.data;
  //   cur_page = result.total_pages;

  //   while (cur_page > 1) {
  //     const curr_result = await asyncFetch(url, { title: substr, page: cur_page });
  //     if (curr_result.data && curr_result.data.length > 0) {
  //       movies = movies.concat(curr_result.data);
  //       cur_page--;
  //     } else {
  //       break;
  //     }
  //   }
  //   const results = movies.map(movie => movie.Title);
  //   return results.sort();
  // }

});