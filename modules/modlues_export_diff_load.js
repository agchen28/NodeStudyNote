var Counter = require('./modlues_export_diff');
Counter.printNextCount();
var Counter2 = require('./modules_exports_diff2');
var CounterObj = new Counter2();
CounterObj.printNextCount();

console.log(module.children);
/*
API提供了解释

http://nodejs.org/api/modules.html

Note that exports is a reference to module.exports making it suitable for augmentation only. If you are exporting a single item such as a constructor you will want to use module.exports directly instead
exports仅仅是module.exports的一个地址引用。nodejs只会导出module.exports的指向，如果exports指向变了，那就仅仅是exports不在指向module.exports，于是不会再被导出

参考其它理解:

http://www.hacksparrow.com/node-js-exports-vs-module-exports.html

http://zihua.li/2012/03/use-module-exports-or-exports-in-node/

module.exports才是真正的接口，exports只不过是它的一个辅助工具。　最终返回给调用的是module.exports而不是exports。
所有的exports收集到的属性和方法，都赋值给了Module.exports。当然，这有个前提，就是module.exports本身不具备任何属性和方法。
如果，module.exports已经具备一些属性和方法，那么exports收集来的信息将被忽略。
*/

/*
从结果可以看出，并没有报错，表示可以这么定义，但最终module.exports覆盖了exports



虽然结果不会报错，如果这么用开发中难免会有一些问题存在，所以

1.最好别分别定义module.exports和exports

2.NodeJs开发者建议导出对象用module.exports,导出多个方法和变量用exports
*/