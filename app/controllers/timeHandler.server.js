'use strict';

var moment = require('moment');

function TimeHandler () {

	this.getTimestamp = function (req, res) {
		var obj = genJson(req.params.timeStr);
		res.json(obj);
	};
	
	function genJson(str){
	    var obj = {
	        unix:null,
	        natural: null
	    };
	    var date = null;
	    var reg = /[A-Z]\w+ \d{1,2}, \d{2,4}/;
	    if(isNaN(str)){
	        if(reg.test(str)){
	            date = moment(str);    
	        }else{
	            return obj;
	        }
	    }else{
	        date = moment.unix(str);
	    }
	    obj.unix = date.format('X');;
	    obj.natural = date.format('MMMM D, YYYY');
	    return obj;
	}
}

module.exports = TimeHandler;