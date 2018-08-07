const fsp = require("fs").promises; // Node v10 experimental feature (It means doesn't work in version 8.)
const fs = require("fs"); // For parse(file)

module.exports = {
  async requireAsync(path) {
    let file = null;
    try {
      file = await fsp.readFile(require("path").dirname(process.argv[1]) + "/" + path, 'utf8');
    } catch (e) {
      throw new Error(`Cannot find file ${path}\n${e.stack}`);
    }
    return JSON.parse(file.replaceWithEmpty(/(?!.*?")(\/\/.*$|\/\*.*?((|\n.*?)*)\*\/|<!--.*((|\n.*?)*)-->)/gm));
  },
  require(path) {
    let file = null;
    try {
      file = fs.readFileSync(require("path").dirname(process.argv[1]) + "/" + path, 'utf8');
    } catch (e) {
      throw new Error(`Cannot find file ${path}\n${e.stack}`);
    }
    return JSON.parse(file.replaceWithEmpty(/(?!.*?")(\/\/.*$|\/\*.*?((|\n.*?)*)\*\/|<!--.*((|\n.*?)*)-->)/gm));
  },
  parse(json) {
    return JSON.parse(json.replaceWithEmpty(/(?!.*?")(\/\/.*$|\/\*.*?((|\n.*?)*)\*\/|<!--.*((|\n.*?)*)-->)/gm));
  }
}

String.prototype.replaceWithEmpty = function(pattern) {
  return this.replace(pattern, "");
}
