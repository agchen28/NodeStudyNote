var mysql = require('mysql'); //调用mysql模块

//创建一个connection
var connection = mysql.createConnection({
	host: '192.168.1.18',
	user: 'linggan',
	password: '123456',
	prot: '3306',
	database: 'test'
});
connection.connect(function(err) {
	if (err) {
		console.log('query:' + err);
		return;
	}
	console.log('成功');
});
//执行sql语句
connection.query('select 1 as abc', function(err, rows, fields) {
	if (err) {
		console.log('query' + err);
		return;
	}
	console.log('abc is:' + rows[0].abc);
});

//关闭连接
connection.end(function(err) {
	if (err) {
		return;
	}
	console.log('end');
});