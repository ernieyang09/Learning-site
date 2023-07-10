# Lodash .get

```js
var object = { 'a': [{ 'b': { 'c': 3 } }] };

// skip this
_.get(object, 'a[0].b.c');

// try this one
_.get(object, ['a', '0', 'b', 'c']);
```


```js

function get(obj, path, defaultValue) {

  let current = obj

  for (let i = 0; i < path.length; i++) {
    if (typeof current === 'object' && current[path[i]]) {
      current = current[path[i]]
    } else {
      return defaultValue
    }
  }

  return current

}

```
