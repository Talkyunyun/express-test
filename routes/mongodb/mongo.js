var express = require('express');
var mongodb = require('mongodb');
var router  = express.Router();

/**
 *	@description: mongodb数据库连接配置
 */
var mongodbServer = new mongodb.Server('localhost', 27017, {auto_reconnect: true});
var mongoObj = new mongodb.Db('alim', mongodbServer, {safe: true});

router.get('/', function(req, res, next){
	// 打开mongodb数据库
	mongoObj.open(function(err, db){
		if (!err) {
			// 选择集合
			db.createCollection('bb', {safe: true}, function(err, collection){
				if (err) {
					console.log(err);
				} else {
					// 新增数据
	                var data = {uid:'2080', name:'Alim',number:1};
	                collection.insert(data, {safe:true}, function(err, result){
	                    console.log(result);
	                });
				}
			});
		} else {
			console.log(err);
		}
	});
	res.send('插入成功<a href="/mongo/find">查看数据</a>');
});

// 查看数据
router.get('/find', function(req, res, next){
	
	mongoObj.open(function(err, db){
		if (!err) {
			db.createCollection('bb', {safe: true}, function(err, collection){
				collection.find().toArray(function(err, result){
					console.log(result);
				});
			});
		} else {
			console.log(err);
		}
	});
	res.send('成功');
});

module.exports = router;