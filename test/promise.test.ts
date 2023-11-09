import * as assert from 'assert';

describe('Promise test', () => {
  const process = (val: number, sec: number, rej = false): Promise<number> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!rej) {
          resolve(val);
        } else {
          reject('My Error');
        }
      }, sec);
    });
  };

  let process_one: () => {};
  let process_two: () => {};
  let process_three: () => {};
  let process_four: () => {};
  let process_five: () => {};

  beforeEach(() => {
    process_one = async (): Promise<{ status: number; data: number }> => {
      try {
        const res = await process(10, 800);
        return { status: 200, data: res };
      } catch (err) {
        return { status: 500, data: -1 };
      }
    };

    process_two = async (): Promise<{ status: number; data: number }> => {
      try {
        const res = await process(20, 10);
        return { status: 200, data: res };
      } catch (err) {
        return { status: 500, data: -1 };
      }
    };

    process_three = async (): Promise<{ status: number; data: number }> => {
      try {
        const res = await process(30, 500);
        return { status: 200, data: res };
      } catch (err) {
        return { status: 500, data: -1 };
      }
    };

    process_four = async (): Promise<{ status: number; data: number }> => {
      try {
        const res = await process(40, 80, true);
        return { status: 200, data: res };
      } catch (err) {
        return { status: 500, data: -1 };
      }
    };

    process_five = async (): Promise<{ status: number; data: number }> => {
      try {
        const res = await process(50, 200);
        return { status: 200, data: res };
      } catch (err) {
        return { status: 500, data: -1 };
      }
    };
  });

  it('Call multy async methos parallel', async () => {
    let result;
    try {
      result = await Promise.all([
        process_one(),
        process_two(),
        process_three(),
        process_four(),
        process_five(),
      ]);
    } catch (err) {
      console.error(err);
    }
    console.log('result = ', result);
  });

  it('Call rejected promise', async () => {
    process_one = async (): Promise<number> => {
      try {
        return await process(100, 1000, true);
      } catch (error) {
        return -1;
      }
    };

    process_two = async (): Promise<number> => {
      try {
        return await process(200, 100);
      } catch (error) {
        return -1;
      }
    };
    const result = await Promise.all([process_one(), process_two()]);
    console.log('result = ', result);
  });
});
