# Cheat sheet

arrange in the future


### For loop array

```rust
let nums = vec![1, 2, 3, 4, 5];

for i in 0 .. nums.len() {
}

// reverse
for i in (1..4).rev() {
}

for val in nums {
}


// Create an iterator over references to the elements in the collection.  
for (i, val) in nums.iter().enumerate() {

}

// it will consume nums, so that you can't iterate again, 
for (i, val) in nums.into_iter().enumerate() {
    
}

```

```rust
let nums = vec![1; 10];

// ??
println!("{:?}", nums);
// [1,1,1,1,1,1,1,1,1,1]
```


```rust
use std::collections::HashMap;

let mut my_map: HashMap<String, i32> = HashMap::new();
// default value
let mut my_map: HashMap<String, i32> = HashMap::with_capacity(10);
```
