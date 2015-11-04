var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
	var userName = req.query.txtUserName;
	var password = req.query.txtPassword;
	var userName1 = req.param('txtUserName');
	var password1 = req.param('txtPassword');
	console.log('req.query用户名' + userName);
	console.log('req.query密码' + password);
	console.log('req.param用户名' + userName1);
	console.log('req.param密码' + password1);
	res.render('subform', {
		title: '提交表单及接受参数示例'
	});
});

router.post('/', function(req, res) {
	var userName = req.body.txtUserName;
	var password = req.body.txtPassword;
	var userName1 = req.param('txtUserName');
	var password1 = req.param('txtPassword');
	console.log('req.body用户名' + userName);
	console.log('req.body密码' + password);
	console.log('req.param用户名' + userName1);
	console.log('req.param密码' + password1);
	res.render('subform', {
		title: '提交表单及接受参数示例'
	});
});

module.exports = router;