# CJS / CommonJS

To use CJS syntax in your code, **remove** the following line to your `package.json` if it exists:

```json
  "type": "module",
```

Then, make sure you import & export your code like below:

## Imports

```javascript
// for importing one function:
const sum = require('../sum');

// for importing multiple functions (using destructuring):
const { add, allEvens } = require('../index');
```

## Exports

```javascript
// for exporting one function:
const sum = () => {};
module.exports = sum;

// for exporting multiple functions from a single file:
const add = () => {};
const allEvens = () => {};
module.exports = { add, allEvens };
```

# ESM / ECMAScript Modules

To use ESM syntax in your code, **add** the following line to your `package.json`:

```json
  "type": "module",
```

Then, make sure you import & export your code like below:

## Imports

```javascript
// For importing a default function from a file:
import sum from '../sum.js';

// For importing multiple functions from one file:
import { add, allEvens } from '../index.js';
```

## Exports

```javascript
// For exporting a default or single function:
const sum = () => {};
export default sum;

// For exporting multiple functions from a single file:
export const add = () => {};
export const allEvens = () => {};
```

# Resources

[JavaScript Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
