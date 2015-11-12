var express = require('express');
var router = express.Router();

// 登录页面
router.get('/', function(req, res, next) {
	res.render('login', {title: "欢迎登录"});
});

// 处理登录认证
router.post('/check_login', function(req, res, next){
	var name = req.body.username;
	var pass = req.body.password;

	md5.update(pass);
	var pass = md5.digest('hex');
	if (pass == 'e10adc3949ba59abbe56e057f20f883e') {
		res.send('1');
	} else {
		res.send('00');
	}

	// 从mysql中获取数据
//	mysqlObj.query("SELECT password,byname,logo FROM uc_user WHERE login_name='"+name+"' and status=1 limit 1", function(err, rows, fields){
//		if (rows[0].password == pass) {// 登录成功
//			res.send('1');
//		} else {// 登录失败
//			res.send('0');
//		}
//	});
//	mysqlObj.end();
});

module.exports = router;