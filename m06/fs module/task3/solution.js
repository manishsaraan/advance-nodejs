const fs = require('fs');
const path = require('path');

const dirname = path.join(__dirname, 'files');
const currentFiles = fs.readdirSync(dirname);

const logWithTime = (message) => {
	console.log(`${new Date().toUTCString()} : ${message}`);
}

fs.watch(dirname, (eventType, filename) => {
	if(eventType === 'rename'){ //added or deleted
       const index = currentFiles.indexOf(filename);
       if(index > 0){
       	 currentFiles.split(index, 1);
       	 logWithTime(`${filename} was removed!`);
       }

       currentFiles.push(filename);
       logWithTime(`${filename} aw added`);
	}
	logWithTime(`${filename} was modified.`)
});