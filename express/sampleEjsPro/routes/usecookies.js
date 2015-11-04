var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
	if (req.cookies.isLogin) {
		console.log('usecookies-cookies:' + req.cookies.isLogin);
		req.session.isLogin = req.cookies.isLogin;
	}
	if (req.session.isLogin) {
		console.log('usecookies:' + req.session.isLogin);
		res.locals.isLogin = req.session.isLogin;
	}
	res.render('usecookies', {
		title: '使用cookies示例'
	});
});

router.post('/', function(req, res) {
	req.session.isLogin = 'success';
	res.locals.isLogin = req.session.isLogin;
	res.cookie('isLogin', 'sucess', {
		maxAge: 60000
	});
	res.render('usecookies', {
		title: '使用cookies示例'
	})
});

router.get('/logout', function(req, res) {
	//清除cookies
	res.clearCookie('isLogin');

	//清除session
	req.session.destroy();
	res.send('logout succcess!');
});

module.exports = router;