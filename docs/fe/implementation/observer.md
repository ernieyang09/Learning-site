# Observer pattern

```js
// some one will call it subject
class Observerable {
  #observers

  constructor() {
    this.#observers = []
  }

  subscribe(observer) {
    this.#observers.push(observer)
  }

  unsubscribe(observer) {
    this.#observers = this.#observers.filter((ob) => ob !== observer)
  }

  notifyAll(msg) {
    this.#observers.forEach((ob) => ob.update(msg))
  }

}

class Observer {
  update(message) {
    console.log(`Receive: ${message}`)
  }
}
```
