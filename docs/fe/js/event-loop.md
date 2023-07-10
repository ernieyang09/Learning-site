# Event loop


Javascript is a single threaded language. This means it has one call stack and one memory heap.

When we invoke a function, it gets added to something called the call stack. The call stack is part of the JS engine, this isn’t browser specific.

For the web api(fetch, setTimeout...), it'll be handled by browser. After execution, the result will put into callback queue.

When the call stack is empty, it will put the callback queue item into call stack.


## heap

It is where all the memory allocation happens for your variables, that you have defined in your program.


```js
console.log('1');
setTimeout(function() {
   console.log('2');
}, 0);
var promise = new Promise(function(resolve, reject) {
   resolve();
});
promise.then(function(resolve) {
   console.log('3');
})
.then(function(resolve) {
   console.log('4');
});
console.log('5');

// ans 1 5 3 4 2
```

Microtask queue has more high priority than macro task. (In browser mechanism, they are in different queue.)
