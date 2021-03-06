const http = require('http');

//req : http.ClientRequest
const req = http.get(
          'http://www.google.com',
          res => {
          	//res : http.IncommingMessage
          	console.log(res.statusCode);
          	console.log(res.headers);

          	res.on('data', data => {
          		console.log(data.toString());
          	});
          }
	    );

    req.on('error', e => console.log(e));
    console.log(req.agent); //http.Agent