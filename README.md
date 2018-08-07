# JSON++

JSON++ is useful version of [JSON](https://json.org).

# Example

## test.js + test.json

### test.js

```js
const jsonplusplus = require('jsonplusplus');
const json = json.require('./test.json');
console.log(json.test);
```

#### Output
```
Like JSON
```

### test.json

```
{
  /* comment */
  "test": "Like JSON" <!-- comment --> /* comment */
  // comment
}
```

# Methods

## jsonplusplus.require(path)
Create a JSON object like ``require``.

## jsonplusplus.requireAsync(path)
Mostly same as require method, but it is async method.

## jsonplusplus.parse(json)
Mostly same as ``JSON.parse(json)``, but it returns JSON object after removes original features.

# Extras

## String.prototype.replaceWithEmpty(pattern)
This method is same as ``String.prototype.replace(pattern, "");``.

# Install
With [npm](https://npmjs.org) do:
```
npm i jsonplusplus
```

# Licence
LGPL 3.0 or later
