describe('Node js Test', async () => {
  it('Event', () => {
    const EventEmitter = require('events');
    const myEmitter = new EventEmitter();

    // First listener
    myEmitter.on('myEvent', function firstListener() {
      console.log('Helloooo! first listener');
    });
    // Second listener
    myEmitter.on('myEvent', function secondListener(arg1: any, arg2: any) {
      console.log(`event with parameters ${arg1}, ${arg2} in second listener`);
    });
    // Third listener
    myEmitter.on('myEvent', function thirdListener(...args: any[]) {
      const parameters = args.join(', ');
      console.log(`event with parameters ${parameters} in third listener`);
    });

    console.log(myEmitter.listeners('myEvent'));

    myEmitter.emit('myEvent', 1, 2, 3, 4, 5, 6, 7);
  });

  it('Senes API', () => {
    const http = require('https');

    const options = {
      method: 'GET',
      hostname: 'sapi-sensis.p.rapidapi.com',
      port: null as any,
      path: '/getByListingId',
      headers: {
        'x-rapidapi-host': 'sapi-sensis.p.rapidapi.com',
        'x-rapidapi-key': '308d13fbf5mshbbbca0f601ff87cp1ded48jsned42b93c46c4',
        useQueryString: true
      }
    };

    const req = http.request(options, function (res: any) {
      var chunks: any[] = [];

      res.on('data', function (chunk: any) {
        chunks.push(chunk);
      });

      res.on('end', function () {
        console.log('res end');
        var body = Buffer.concat(chunks);
        console.log('API result: ', body.toString());
      });
    });

    req.end();
  });
});
