var mysql = require('mysql'); //调用mysql模块

//创建一个connection
var db_config = {
	host: '192.168.1.18',
	user: 'linggan',
	password: '123456',
	prot: '3306',
	database: 'test'
};
var connection;
function handleDisconnect() {
	connection = mysql.createConnection(db_config);
	connection.connect(function(err) {
		if (err) {
			console.log("进行断线重连：" + new Date());
			setTimeout(handleDisconnect, 2000); //2秒重连一次k
			return;
		}
		console.log("连接成功");
	});
	connection.on('error', function(err) {
		console.log('db error', err);
		if (err.code === 'PROTOCOL_CONNECTION_LOST') {
			handleDisconnect();
		} else {
			throw err;
		}
	});
}
handleDisconnect();

// var userAddSql = 'INSERT INTO userinfo(Id,UserName,UserPass) VALUES(0,?,?)';
// var userAddSql_Params = ['Wilson', 'abcd'];
// //增
// connection.query(userAddSql, userAddSql_Params, function(err, result) {
// 	if (err) {
// 		console.log('[INSERT ERROR] - ', err.message);
// 		return;
// 	}

// 	console.log('--------------------------INSERT----------------------------');
// 	//console.log('INSERT ID:',result.insertId);
// 	console.log('INSERT ID:', result);
// 	console.log('-----------------------------------------------------------------\n\n');
// });

// var userModSql = 'UPDATE userinfo SET UserName = ?,UserPass = ? WHERE Id = ?';
// var userModSql_Params = ['钟慰', '5678', 1];
// //改
// connection.query(userModSql, userModSql_Params, function(err, result) {
// 	if (err) {
// 		console.log('[UPDATE ERROR] - ', err.message);
// 		return;
// 	}
// 	console.log('--------------------------UPDATE----------------------------');
// 	console.log('UPDATE affectedRows', result.affectedRows);
// 	console.log('-----------------------------------------------------------------\n\n');
// });

// var userGetSql = 'SELECT * FROM userinfo';
// //查
// connection.query(userGetSql, function(err, result) {
// 	if (err) {
// 		console.log('[SELECT ERROR] - ', err.message);
// 		return;
// 	}

// 	console.log('--------------------------SELECT----------------------------');
// 	console.log(result);
// 	console.log('-----------------------------------------------------------------\n\n');
// });

var userDelSql = 'DELETE FROM userinfo where Id=?';
var userDelSql_Params = [1];
//删
connection.query(userDelSql, userDelSql_Params, function(err, result) {
	if (err) {
		console.log('[DELETE ERROR] - ', err.message);
		return;
	}

	console.log('--------------------------DELETE----------------------------');
	console.log('DELETE affectedRows', result.affectedRows);
	console.log('-----------------------------------------------------------------\n\n');
});


connection.end();