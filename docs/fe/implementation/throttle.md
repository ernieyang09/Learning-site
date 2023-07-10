# Throttle

```js
function test () { console.log('Hello World') }

const t = throttle(test, 500)

t()

setTimout(()=> {
  t()
}, 50)

setTimout(()=> {
  t()
}, 750)

```

```js
function throttle(fn, delay) {
  let exec = false
  let timer

  return (...args) => {
    if (!exec) {
      exec = true
      fn(args)
      timer = setTimeout(()=> {
        exec = false
      }, delay)
    }
  }
}
```
