# syntax or concept

arrange in the future


#### Immutable

```rust
fn main() {
    let x = 5;
    println!("The value of x is: {x}");
    x = 6;
    println!("The value of x is: {x}");
}
// cannot assign twice to immutable variable
```


#### panic! and unreachable!

```rust
let condition = true
if condition {

}
// It's used when you want the program to exit with an error message at runtime
panic!("Negative value encountered: {}");

// It's used to communicate to the compiler that a certain code path will never be taken.
unreachable!("This line should never be reached");
```