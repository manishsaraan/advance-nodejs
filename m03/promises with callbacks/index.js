const fs = require('fs');

//writing with callback and promises
const readFileArray = function(file, cb = () => {}){ //detting up default cb if no callback is provided
  return new Promise( (resolve, reject) => {
		fs.readFile(file, (err, data) => {
	      if(err){
	      	//use of both promise reject and callback
	      	reject(err);
	      	cb(err);
	      }

	      const lines = data.toString().trim().split('\n');
	      resolve(lines);
	      cb(null, data);
		});
  });
}
//call
readFileArray('./numbers.js', (err, lines) => {
	if(err) throw err;
	const numbers = lines.map(Number);
	const oddNumbers = numbers.filter(number => number % 2 ===1);
	console.log('odd numbers count', oddNumbers.length);
});

readFileArray('numbers.js')
         .then( lines => {
         	const numbers = lines.map(Number);
			const oddNumbers = numbers.filter(number => number % 2 ===1);
			console.log('odd numbers count', oddNumbers.length);
         })
         .catch(err => console.log(err));