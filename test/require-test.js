const jsonp = require("../src/index");
const testjson = jsonp.require("./test.jsonpp");

console.log("Test1: " + testjson.test);
console.log("Test2: " + testjson.test2);
console.log("Test3: " + testjson.test3);
