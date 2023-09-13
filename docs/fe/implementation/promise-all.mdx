# Promise.all

Hint

1. Return promise
2. Remember the result idx

```js
const p1 = Promise.resolve(3);

const p2 = 1337;

const p3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, 'foo');
});


const promiseAll = (promises) => {
	return new Promise((res, rej) => {
  
		let pLength = promises.length
    const result = Array(promises.length)
  
  	promises.forEach((p, i) => {
    	try {
      	const pp = p instanceof Promise ? p : Promise.resolve(p)
        pp.then((v) => {

          result[i] = v
          pLength -= 1
          if (pLength === 0) {
          	res(result)
          }
        })
      } catch(err) {
      	rej(err)
      }
    
    })
  
  })
}

promiseAll([p1, p2, p3]).then(values => {
	console.log(values)
}); // [3, 1337, "foo"]

```
