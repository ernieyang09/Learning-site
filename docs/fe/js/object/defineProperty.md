
# Object.defineProperty

```js
const person = { name: 'Ernie' }


const person = {};

Object.defineProperty(person, 'name', {
  value: 'Ernie',
  configurable: true,
  writable: true,
  enumerable: true
});

Object.getOwnPropertyDescriptor(person, 'name');
// {value: "Ernie", writable: true, enumerable: true, configurable: true}
```


### configurable

If the property can be deleted
