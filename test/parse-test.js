
const jsonp = require("../src/index");
const json = `{
  // test
  /*
    test
  */
  "test": "https://google.com", /* test */
  "test2": "JSONTest2", // test
  // This is ...
  "test3": "JSONTest3"
  /* <!-- comment --> */
}`;
const testjson = jsonp.parse(json);
console.log("---- parse-test ----")
console.log("Test1: " + testjson.test);
console.log("Test2: " + testjson.test2);
console.log("Test3: " + testjson.test3);
