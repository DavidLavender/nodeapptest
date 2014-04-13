var os = require('os');

var message = 'Here is some info about your system';

var sysarr = new Array('Type: ' + os.type(), 
	'Node Version ' + process.version,
	'Platform: ' + os.platform(),
	'Hostname: ' + os.totalmem(),
	'Free Memory: ' + os.freemem());

console.log(message);

var arraylen = sysarr.length;

var i = 0;

while(i < arraylen) {
	console.log(sysarr[i]);
	i++;
}