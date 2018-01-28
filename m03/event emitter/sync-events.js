const EventEmitter = require('events');

class WithLog extends EventEmitter {
	execute(taskFunc){
		console.log('before exicuting');
		this.emit('start');
		taskFunc();
		this.emit('end');
		console.log('after exicuting');
	}
}

const withLog = new WithLog();

withLog.on('start', () => console.log('about to exicute'));
withLog.on('end', () => console.log('about to end'));

withLog.execute( () => console.log('****** exicuting function ********'));