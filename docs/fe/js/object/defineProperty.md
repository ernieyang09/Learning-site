
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

### writable

If the property can be overwrited

### enumable

If the property can be found when enumerate

## Get, Set

```js
const person = {};

Object.defineProperty(person, 'name', {
  get() { return this._name },
  set(value) { return this._name = value.charAt(0).toUpperCase() + value.slice(1) }
});
```


It used in vue MVVM model (I don't write vue before)

However, in later vue(2.6? 3.0?) it change from defineProperty to Proxy
