# enu

`enu` is a simple function that allows you to extract the *enumerable* and
*non-enumerable* properties of any given object.

## Installation

The module is released in the public npm registry and can be installed by
running:

```
npm install --save enu
```

## Usage

This module simply exports one function, the `enu` function and can be required
as followed:

```js
'use strict';

var enu = require('enu');
```

To get the properties of an object you simply pass in the object as first
argument:

```js
var props = enu({
  foo: 'bar',
  bar: false
});
```

The `props` variable now contains an object with 4 keys:

- *enu* An object which contains all *enumerable* values as key->value pairs
- *non* An object which contains all *non-enumerable* values as key->value pairs
- *enukeys* An array with all keys that are *enumerable*.
- *nonkeys* An array with all keys that are *non-enumerable*.

## License

MIT
