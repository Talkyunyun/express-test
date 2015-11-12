var express = require('express');
var fileObj = require('fs');// 文件IO操作模块
var router  = express.Router();

// 写文件
router.get('/', function(req, res, next){

	fileObj.writeFile('a.txt', '我讲要被写入到a.txt文件中,11111', function(err){
		res.send('保存成功');
	});
});

// 读文件
router.get('/get', function(req, res, next){
	fileObj.readFile('a.txt', 'utf8', function(err, data){
		res.send(data);
	});
});

module.exports = router;