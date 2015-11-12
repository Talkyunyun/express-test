var express = require('express');
var router  = express.Router();

// 设置session值(node的session默认是保存在内存中的，请自行处理)
router.get('/set', function(req, res, next){
	
	req.session.username = '我是杨云';
	req.session.uid      = '2080';
	res.send('设置session成功!<a href="/session/get">查看session值</a>');
});

// 获取session值
router.get('/get', function(req, res, next){
	
	var username = req.session.username;
	var uid = req.session.uid;
	res.send('获取session成功!用户名：'+username+'<br>用户ID：'+uid+'<br><a href="/session/set">设置session值</a>');
});


module.exports = router;