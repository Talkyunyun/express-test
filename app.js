var express	 	 = require('express');
var path    	 = require('path');
var logger  	 = require('morgan');
var bodyParser   = require('body-parser');
var cookieParser = require('cookie-parser');
var session      = require('express-session');

var app = express();

/**
 *	@description: 设置模板引擎以及模板相关配置
 */
app.set('views', path.join(__dirname, 'views'));
app.engine('.html', require('ejs').__express);
app.set('view engine', 'html');


/**
 *	@description: node的一些中间件设置
 */
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
	secret: 'test',
	name  : 'cookie-name',// 设置cookie的name值，默认cookie的name是：connect.sid
	cookie: {maxAge: 7200},// 设置maxAge是7200ms，cookie过期时间
	resave: false,
	saveUninitialized: true
}));
app.use(express.static(path.join(__dirname, 'public')));


/**
 *	@description: 路由配置
 */
var routes     = require('./routes/index');
var login      = require('./routes/login');
var redisPage  = require('./routes/redis/redis'); 
var mysqlPage  = require('./routes/mysql/mysql');
var cryptoPage = require('./routes/crypto/crypto');
var sessionPage= require('./routes/session/session');
var cookiePage = require('./routes/cookie/cookie');
var mongoPage  = require('./routes/mongodb/mongo');
var filePage   = require('./routes/file/file');
var requestPage= require('./routes/request/request');

app.use('/', routes);
app.use('/login', login);
app.use('/redis', redisPage);
app.use('/mysql', mysqlPage);
app.use('/crypto', cryptoPage);
app.use('/session', sessionPage);
app.use('/cookie', cookiePage);
app.use('/mongo', mongoPage);
app.use('/file', filePage);
app.use('/request', requestPage);

/**
 *	@description: 404页面错误处理
 */
app.use(function(req, res, next) {
  	var err = new Error('Not Found');
  	err.status = 404;
  	next(err);
});



/**
 *	@description: 开发阶段错误打印调试处理
 */
if (app.get('env') === 'development') {
  	app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    	res.render('error', {
      	message: err.message,
      	error: err
    	});
  	});
}


/**
 *	@description: 生成阶段错误处理（不向用户暴漏错误）
 */
app.use(function(err, req, res, next) {
  	res.status(err.status || 500);
  	res.render('error', {
    	message: err.message,
    	error: {}
  	});
});

module.exports = app;