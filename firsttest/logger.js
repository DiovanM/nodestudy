const Events = require('events');

var url = 'localhost';

class Logger extends Events {	
log(message){

	console.log(message);

	this.emit('log', {id: 2, url: 'zap.com'});
	}
}

module.exports = Logger;