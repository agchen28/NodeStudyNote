var EventEmitter = require('events').EventEmitter;
var ee = new EventEmitter();

var listener = function(foo, bar) {
	console.log("第1个监听事件,参数foo=" + foo + ",bar=" + bar);
};

ee.on('some_events', listener);

/*
    看到API中removeListener移除方法时，以为应该是这样
    但是结果^_^!!!!!
*/
console.log('第一轮');
ee.emit('some_events', 'Wilson', 'Zhong');
ee.removeListener('some_events', listener);

console.log('第二轮');
ee.emit('some_events', 'Wilson', 'Zhong');