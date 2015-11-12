var express = require('express');
var redis 	= require('redis');
var router  = express.Router();

/**
 *	@description: redis缓存连接和全局配置，使用请参考/routes/redis/redis.js文件
 * 	连接redis数据库，createClient(port, host, options);
 * 	如果redis在本机，端口也是默认，直接写createClient()即可
 */
var redisObj= redis.createClient(6379, '127.0.0.1', {});

// redis操作测试
router.get('/', function(req, res, next) {
	// 设置redis数据
	redisObj.set('test_redis', 'The is a redis value!');
	
	// 获取redis数据
	redisObj.get('test_redis', function(err, rypaly){
		res.send(rypaly.toString());
	});
});

module.exports = router;