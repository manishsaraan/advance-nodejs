const url = require('url');
const server = require('http').createServer();

server.on('request', (req, res) => {
  switch(req.url){
  	case '/parse' :
    const websiteUrl = 'https://app.pluralsight.com/player?course=nodejs-advanced&author=samer-buna&name=nodejs-advanced-m9&clip=0&mode=live';
    //parse whole url to get its parts.
    const parsedUrl = url.parse(websiteUrl, true);
    console.log(parsedUrl);
    const formattedUrl = url.format(parsedUrl);
    console.log(formattedUrl);
  	break;
  	default : 
  	  res.writeHead(404, {'content-type' : 'plain/text'});
  	  res.end();
  }
});

server.listen(8000);