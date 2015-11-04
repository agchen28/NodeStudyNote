var mysql = require("mysql");

//创建连接池
var pool = mysql.createPool({
	host: '192.168.1.18',
	user: 'linggan',
	password: '123456',
	prot: '3306',
	database: 'test'
});


pool.getConnection(function(err, connection) {

	connection.query('SELECT * FROM userinfo;', function(err, result) {
		console.log(result);
		connection.release();
	});

	connection.query('SELECT * FROM userinfo;', function(err, result) {

		console.log(result);
		connection.release();
	});
});