const server = require('http').createServer();

server.on('request', (req, res) => {
	res.writeHead(200, {'content-type' : 'text/plain'});
	res.write('Hello World\n');

	setTimeout(function(){
		res.write('Sending continues data')
	}, 1000);
    
    //will not be send as connection will be closed before sending
	setTimeout(function(){
		res.write('not going to exicute');
	}, 5000);
});

server.timeout = 1200;
server.listen(8000, () => {
  console.log('server is listening at port : 8000');
});