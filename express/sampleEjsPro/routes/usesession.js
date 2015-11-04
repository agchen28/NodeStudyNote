var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
	if (req.session.isLogin) {
		console.log('usesession:' + req.session.isLogin);
		res.locals.isLogin = req.session.isLogin;
	}
	res.render('usesession', {
		title: '使用session示例'
	});
});

router.post('/', function(req, res) {
	req.session.isLogin = 'success';
	res.locals.isLogin = req.session.isLogin;
	res.render('usesession', {
		title: '使用session示例'
	})
});

module.exports = router;