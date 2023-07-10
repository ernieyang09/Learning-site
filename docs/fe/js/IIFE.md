# IIFE

An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined. 

- Avoid polluting the global namespace
- Execute an async function
- The module pattern
- IIFE use block scope, not function scope

Classic interview question

```js
for (var i = 1; i < 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}
// 5 5 5 5 5
```

==>

```js
for (var i = 1; i < 5; i++) {
  (function (i) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  })(i);
}

// use let is better option
```
