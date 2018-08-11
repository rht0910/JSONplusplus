const fs = require('fs')
const regex = /(?!.*?")(\/\/.*$|\/\*.*?((|\n.*?)*)\*\/|<!--.*((|\n.*?)*)-->)/gm;
const empty = "";
const replace = function(str, substr) {
  str = str.replace(regex, empty);
  str = str.replace(/,\n\n/gm, ",\n");
  return str.replace(/(,}|,\n(\n.*?|)})/gm, "}");
}

require.extensions['.jsonpp'] = function(module, filename) {
  let file = null;
  try {
    file = fs.readFileSync(filename, 'utf8');
  } catch (e) {
    throw new Error(`Cannot find file ${filename}\n${e.stack}`);
  }
  try {
    module.exports = JSON.parse(replace(file, `\n  "//": "$2",`));
  } catch (err) {
    err.message = filename + ': ' + err.message;
    throw err
  }
}
