var express = require('express');
var mysql   = require('mysql');
var router  = express.Router();

/**
 *	@description: mysql数据库连接和全局配置
 */
var mysqlObj = mysql.createConnection({
	host: '127.0.0.1',
	user: 'root',
	password: 'root',
	database: 'beauty'
});
mysqlObj.connect();


router.get('/', function(req, res, next){
	// 从mysql中获取数据
	mysqlObj.query("SELECT * FROM uc_user", function(err, rows, fields){
		if (err) throw err; 
		console.log(rows)
	});
	mysqlObj.end();// 关闭mysql连接
	res.send('哈哈哈');
});

module.exports = router;