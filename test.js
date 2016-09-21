var crestron = require('crestron');

var obj = new crestron.Connection('98.100.64.58', 7, '', '', 41794);

obj.on('connect', function() {
	console.log('connected');
	setInterval(function() {
		//console.log('requesting updates');
		//obj.updateRequest();
		obj.toggleDigital(447, false, 100);
	}, 1000);
});

obj.on('error', function(err) {
	console.log('' + err);
});

obj.on('close', function() {
	console.log('closed');
});

obj.on('digital', function(slot, join, value) {
	console.log('digital; slot:' + slot + ', join:' + join + ', value:' + value);
});

obj.on('digitalSent', function(slot, join, value) {
	console.log('digital value sent; slot:' + slot + ', join:' + join + ', value:' + value);
});

obj.on('analog', function(slot, join, value) {
	console.log('analog; slot:' + slot + ', join:' + join + ', value:' + value);
});

obj.on('analogSent', function(slot, join, value) {
	console.log('analog value sent; slot:' + slot + ', join:' + join + ', value:' + value);
});

obj.on('serial', function(slot, join, value) {
	console.log('serial; slot:' + slot + ', join:' + join + ', value:' + value);
});

obj.on('serialSent', function(slot, join, value) {
	console.log('serial value sent; slot:' + slot + ', join:' + join + ', value:' + value);
});

obj.connect();
