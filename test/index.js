console.log("--- require Test ---");
require("./require-test");
console.log("------------------");
console.log("");
console.log("--- parse Test ---");
require("./parse-test");
console.log("------------------");
(async function() {
  await require("./async-require-test");
})();
