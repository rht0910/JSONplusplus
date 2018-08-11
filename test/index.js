try {
  require("./require-test");
} catch (e) {
  console.error(`Errored: require-test: ${e}`);
}
try {
  require("./parse-test");
} catch (e) {
  console.error(`Errored: parse-test: ${e}`);
}
(async function() {
  try {
    await require("./async-require-test");
  } catch (e) {
    console.error(`Errored: async-require-test: ${e}`);
  }
})();
