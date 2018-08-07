(async function() {
  const jsonp = require("../src/index");
  const json = `{
    // test
    /*
      test
    */
    "test": "JSONTest", /* test */
    "test2": "JSONTest2", // test
    // This is ...
    "test3": "JSONTest3"
  }`;
  const testjson = await jsonp.parseAsync(json);
  console.log("--- Async parse Test ---");
  console.log("Test1: " + testjson.test);
  console.log("Test2: " + testjson.test2);
  console.log("Test3: " + testjson.test3);
  console.log("------------------------");
})();
