# Strict mode

The "use strict" directive enables JavaScript’s strict mode.

- Prevent accidental creation of global variables
```js
'use strict';

x = 1; // ReferenceError: x is not defined
```
- Catch typing mistakes in variable names
- Prevent accidental deleting
- Prevent duplicating parameter names in a function
```js
function test(a, a) {}
```
- Prevent writing to read-only properties
