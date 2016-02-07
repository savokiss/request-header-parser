'use strict';

var moment = require('moment');

function HeaderHandler () {

	this.whoami = function (req, res) {
		var obj = genJson(req.headers);
		res.json(obj);
	};
	
	function genJson(str){
		var obj = {};
		var softwareReg = /\((.*)\)/;
		obj.ipaddress = str['x-forwarded-for'];
		obj.language = str['accept-language'].split(',')[0];
		obj.software = str['user-agent'].match(softwareReg)[1];
	    return obj;
	}
}

module.exports = HeaderHandler;