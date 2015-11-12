var express = require('express');
var crypto  = require('crypto');
var router  = express.Router();

/**
 *	@description: 全局注册md5和sha1加密对象，供全局使用，使用案例请参考/routes/crypto/crypto.js文件
 */
var md5 = crypto.createHash('md5');
var sha1= crypto.createHash('sha1');


// md5加密
router.get('/md5', function(req, res, next){
	md5.update('123456');// 需要md5加密的字符串
	var str = md5.digest('hex');
	res.send(str);// e10adc3949ba59abbe56e057f20f883e
});

// sh1加密
router.get('/sha1', function(req, res, next){
	sha1.update('123456');// 需要sha1加密的字符串
	var str = sha1.digest('hex');
	res.send(str);// 7c4a8d09ca3762af61e59520943dc26494f8941b
});

// 加密首页显示
router.get('/', function(req, res, next){
	res.send('加密首页');
});

module.exports = router;