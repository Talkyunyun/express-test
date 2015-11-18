var express = require('express');
var request = require('request');
var router  = express.Router();

/**
 *	request模块可以做url请求以及验证等等
 */

// 请求百度并获取百度首页内容做显示
router.get('/', function(req, res, next){
	request('http://www.baidu.com', function(err, re, body){
		if (!err && res.statusCode == 200) {
			res.send(body);
		}
	});
});


module.exports = router;