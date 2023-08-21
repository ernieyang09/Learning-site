# Rate limiter

```javascript
class Runner{
      constructor(concurrency=1){
          this.concurrency = concurrency;
          this.waitList = [];
          this.count = 0;
          this.currentQ = [];
      }
      push(task){
         this.waitList.push(task);
         this.run();
      }
      run(){
         let current = this;
         if(this.count < this.concurrency){
            this.count++;
            if(this.waitList.length > 0){
                let task = this.waitList.shift();
                let id = task.id;
                this.currentQueue.push(id);
                this.showRunningTasks();
                let done = function(){ 
                  this.currentQueue.splice(this.currentQueue.indexOf(id),1);
                    this.showRunningTasks();
                    this.count = this.count - 1;
                    this.run();
                }.bind(current);
               task.task(done);
            }
         }
      }

      showRunningTasks(){
         let existingQueue = this.currentQueue.join(", ");
         document.getElementId("running").innerHTML = existingQueue;
      }
}

```


```js
let runner = new Runner(3);
let task1 = {
  id: 1,
  task: function(done) {
    setTimeout(function() {
      console.log("Task 1");
      done();
    }, 3000)
  }
}

let task2 = {
  id: 2,
  task: function(done) {
    setTimeout(function() {
      console.log("Task 2");
      done();
    }, 5000)
  }
}

let task3 = {
  id: 3,
  task: function(done) {
    setTimeout(function() {
      console.log("Task 3");
      done();
    }, 4000)
  }
}

let task4 = {
  id: 4,
  task: function(done) {
    setTimeout(function() {
      console.log("Task 4");
      done();
    }, 9000)
  }
}

runner.push(task1);
runner.push(task2);
runner.push(task3);
runner.push(task4);
```



```javascript
class Runner {
    constructor(concurrent) {
        this.queue = [];
        this.count = 0;
        this.concurrent = concurrent;
    }
    add(task) {
        this.queue.push(task);
        this.run();
    }
    run() {
        while (this.count) {
            this.count--;
            this.run();
        };
    }
}

```
