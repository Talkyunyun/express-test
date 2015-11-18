var express = require('express');
var router = express.Router();

// 首页
router.get('/', function(req, res, next) {
  res.render('index', { title: '基于NodeJS的web项目功能演示' });
});

module.exports = router;
