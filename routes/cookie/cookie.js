var express = require('express');
var router  = express.Router();

// 设置cookie
router.get('/set', function(req, res, next){
	
	res.cookie('name', 'Alim');
	res.cookie('uid', '5210', {maxAge: 7200});
	
	res.send('设置成功!<a href="/cookie/get">查看cookie</a>');
});

// 获取cookie(特别说明获取cookie的时候是req对象，还有属性为cookies)
router.get('/get', function(req, res, next){
	
	var name = req.cookies['name'];
	var uid  = req.cookies['uid'];
	res.send('获取cookie成功!<br>用户名：'+name+'<br>用户ID：'+uid+'<br><a href="/cookie/del">删除cookie</a>--<a href="/cookie/set">设置cookie</a>');
});

// 删除cookie
router.get('/del', function(req, res, next){
	
	res.cookie('name', "Alim", {maxAge: 0});
	res.cookie('uid', '545', {maxAge: 0});
	res.send('删除成功！<a href="/cookie/get">查看cookie</a>');
});

module.exports = router;