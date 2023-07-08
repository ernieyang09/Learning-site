---
description: Only for simple version
---

# Promise

How to think of making a promise

So we can start from using it.

```javascript
const p = new Promise(cb)
// cb = (resolve, reject) => {...}

// create multiple cb
p.then()
p.then()

// chain cb, it's different senario
p.then().then().catch() ....

// static
Promise.resolve()
Promise.reject()
```

So start from this

1. We can create a class with cb constructor
2. Create a then function
3. Remember promise is a state machine, it would come from pending to either fulfilled or rejected
4. Cause it could be async, the way to deal with async is to store then, catch function into array, and execute it when the state change.
5. Support multi chain (hard part)

```javascript
const STATE = {
    'PENDING': 'pending',
    'FULFILLED': 'fulfilled',
    'REJECTED': 'rejected',
}

class MyPromise {
    #thenCbs
    #value
    #state = STATE.PENDING
    #catchCbs
    // bind for chain function
    #successHandlerBind = this.#successHandler.bind(this)
    #failHandlerBind = this.#failHandler.bind(this)
    
    constructor(cb) {
        cb(this.#successHandler, this.#failHandlerBind)
    }
    
    #runCbs() {
        if (this.state === STATE.FULFILLED) {
            this.#thenCbs.forEach((cb) => cb(this.#val))
        }
        if (this.state === STATE.REJECTED) {
            this.#catchCbs.forEach((cb) => cb(this.#val))
        }
        
        this.#thenCbs = []
    }
    
    #successHandler(val) {
        queueMicrotask(() => {
            // promise can only be invoked once
            if (this.#state !== STATE.PENDING) return
            
            if (val instanceof MyPromise) {
                val.then(this.#successHandlerBind, this.#failHandlerBind)
                return
            }
            
            this.#value = val
            this.#state = STATE.FULFILLED
            
            this.#runCbs()
        })
    }
    
    #failHandler(val) {
        queueMicrotask(() => {
            // promise can only be invoked once
            if (this.#state !== STATE.PENDING) return
            
            if (val instanceof MyPromise) {
                val.then(this.#successHandlerBind, this.#failHandlerBind)
                return
            }
    
            this.#value = val
            this.#state = STATE.REJECTED
            
            this.#runCbs()
        })
    }
    
    // then could be  .then(()=> {}, ()=>{})
    then(thenCb, catchCb) {
        return new MyPromise((resolve, reject) => {
            this.#thenCbs.push((result) => {
                if (thenCb == null) {
                    resolve(result)
                    return
                }
                
                try {
                    resolve(thenCb(result))
                } catch (err) {
                    reject(err)
                }
            })
            
            this.#catchCbs.push((result) => {
                if (catchCb == null) {
                    reject(result)
                    return
                }
                
                try {
                    resolve(catchCb(result))
                } catch (err) {
                    reject(err)
                }
            })
        })

        // in case the Promise is already change state
        this.#runCbs()
    }
    
    catch(cb) {
        return this.then(undefined, cb)
    }
    
    finally(cb) {
        return this.then((result) => {
            cb()
            return result
        }, (result) => {
            cb()
            throw result
        })
    }
    
    static resolve(val) {
        return new MyPromise((res) => res(val))
    }
    
    static reject(val) {
        return new MyPromise((res, rej) => rej(val))
    }
}
```
