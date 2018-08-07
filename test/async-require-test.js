(async function() {
  const jsonp = require("../src/index");
  const testjson = await jsonp.requireAsync("./test.json");
  console.log("--- Async require Test ---");
  console.log("Test1: " + testjson.test);
  console.log("Test2: " + testjson.test2);
  console.log("Test3: " + testjson.test3);
  console.log("--------------------------");
})();
