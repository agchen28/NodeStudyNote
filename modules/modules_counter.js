var outputVal = 0; //输出值
var increment = 1; //增量

/* 设置输出值 */
function seOutputVal(val) {
	outputVal = val;
}

/* 设置增量 */
function setIncrement(incrementVal) {
	increment = incrementVal;
}

function printNextCount() {
	outputVal += increment;
	console.log(outputVal);
}

function printOutputVal() {
	console.log(outputVal);
}
exports.seOutputVal = seOutputVal;
exports.setIncrement = setIncrement;

module.exports.printNextCount = printNextCount;