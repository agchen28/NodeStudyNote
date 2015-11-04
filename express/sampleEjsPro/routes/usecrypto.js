var express = require('express');
var router = express.Router();
var crypto = require('crypto');

router.get('/', function(req, res) {
	res.render('usecrypto', {
		title: '使用加密串示例'
	});
});

router.post('/', function(req, res) {
	var userName = req.body.txtUserName;
	var passWord = req.body.txtPassword;

	//生成口令的散列值
	var md5 = crypto.createHash('md5');
	var en_userPwd = md5.update(passWord).digest('hex');
	console.log('加密后密码：' + en_userPwd);
	res.render('usecrypto', {
		title: '使用加密串示例'
	});
});

module.exports = router;