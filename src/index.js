const fsp = require("fs").promises; // Node v10 experimental feature (It means doesn't work in version 8.)
const fs = require("fs"); // For parse(file)
const regex = /(?!.*?")(\/\/.*$|\/\*.*?((|\n.*?)*)\*\/|<!--.*((|\n.*?)*)-->)/gm;
const empty = "";
const replace = function(str, substr) {
  str = str.replace(regex, empty);
  str = str.replace(/,\n\n/gm, ",\n");
  return str.replace(/(,}|,\n(\n.*?|)})/gm, "}");
}

module.exports = {
  async requireAsync(path) {
    let file = null;
    try {
      file = await fsp.readFile(require("path").dirname(process.argv[1]) + "/" + path, 'utf8');
    } catch (e) {
      throw new Error(`Cannot find file ${path}\n${e.stack}`);
    }
    return JSON.parse(replace(file, `\n  "//": "$2",`));
  },
  require(path) {
    let file = null;
    try {
      file = fs.readFileSync(require("path").dirname(process.argv[1]) + "/" + path, 'utf8');
    } catch (e) {
      throw new Error(`Cannot find file ${path}\n${e.stack}`);
    }
    return JSON.parse(replace(file, `\n  "//": "$2",`));
  },
  parse(json) {
    return JSON.parse(replace(json, `\n  "//": "$2",`));
//  },
//  stringify(json) {
//    let str = JSON.stringify(json);
//    return str.replace(/("\/\/":(\s|)"(.*?)"(,|))/gm, `/* $3 */`);
  }
}
