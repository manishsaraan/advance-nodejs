const http = require('http');
const pid= process.pid;

http.createServer( (req, res) => {
	for(let i = 0; i<=100; i++){}
		res.write(`Handled by the process ${pid}\n`);
	    res.end(`Total Users : ${usercount}`)
	
}).listen(8000, () => {
	console.log(`Started process ${pid}`);
});

process.on('message', msg => {
	usercount = msg.userCount;
})