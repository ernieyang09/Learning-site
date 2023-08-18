# syntax or concept

arrange in the future


### Immutable

```rust
fn main() {
    let x = 5;
    println!("The value of x is: {x}");
    x = 6;
    println!("The value of x is: {x}");
}
// cannot assign twice to immutable variable

fn main() {
    // error: no method named `push_str` found for reference `&str`
    // let mut s = "hello";
    let mut s = String::from("hello");

    s.push_str(", world!");

    println!("{}", s); 
}
```

### Ownership

```rust
let s1 = String::from("hello");
let s2 = s1;

println!("{}, world!", s1);
// error, because the drop function, could be double free, so s1 will be invalid after s2 is declared by s1

let s1 = String::from("hello");
let s2 = s1.clone();

println!("s1 = {}, s2 = {}", s1, s2);
// you need a explicit clone, you make sure that you're doing something that's consuming the memory

let x = 5;
let y = x;

println!("x = {}, y = {}", x, y);
// the type with copy trait(known bytes size usually) and assign to other variable
```

```rust
fn main() {
    let s = String::from("hello");

    takes_ownership(s);  
    // can't use s anymore(ownership transfer)           

    let x = 5;                     

    makes_copy(x);
    // can still use x

}

fn takes_ownership(some_string: String) { 
    println!("{}", some_string);
    //some_string drop here
}

fn makes_copy(some_integer: i32) {
    println!("{}", some_integer);
    // copy will copy new one into function
}
```
It's very inconvenient if we do this kind of things

```rust 
fn main() {
    let s1 = String::from("hello");

    let (s2, len) = calculate_length(s1);

    println!("The length of '{}' is {}.", s2, len);
}

fn calculate_length(s: String) -> (String, usize) {
    let length = s.len();

    (s, length)
}
```

We need reference and borrow

```rust
fn main() {
    let s1 = String::from("hello");

    let len = calculate_length(&s1);

    println!("The length of '{}' is {}.", s1, len);
}

fn calculate_length(s: &String) -> usize {
    s.len()
}
```

```rust
fn main() {
    let s = String::from("hello");

    change(&s);
}

fn change(some_string: &String) {
    some_string.push_str(", world");
}
// error, if you borrow, you can't edit it.

fn main() {
    let mut s = String::from("hello");

    change(&mut s);
}

fn change(some_string: &mut String) {
    some_string.push_str(", world");
}
// yes
```

```rust
// can't use twice mut ref in same scope(safety concern)
let mut s = String::from("hello");

let r1 = &mut s;
let r2 = &mut s;

println!("{}, {}", r1, r2);


// Yes
let mut s = String::from("hello");

let r1 = &s;
let r2 = &s;

println!("{}, {}", r1, r2);

// No, can't have 2 types of ref in the same scope
let mut s = String::from("hello");

let r1 = &s;
let r2 = &mut s;

println!("{}, {}", r1, r2);

// Yes...
let mut s = String::from("hello");

let r1 = &s;
let r2 = &s;
println!("{} and {}", r1, r2);
// scope end

let r3 = &mut s;
println!("{}", r3);

// No, Dangling References
fn dangle() -> &String { 
    let s = String::from("hello");

    &s // when only return ref, but s will be drop after leaving the scope, so error
}
```


### Loop

Break from inner loop

```rust
fn main() {
    let mut count = 0;
    'counting_up: loop {
        println!("count = {count}");
        let mut remaining = 10;

        loop {
            println!("remaining = {remaining}");
            if remaining == 9 {
                break;
            }
            if count == 2 {
                break 'counting_up;
            }
            remaining -= 1;
        }

        count += 1;
    }
    println!("End count = {count}");
}
```


### panic! and unreachable!

```rust
let condition = true
if condition {

}
// It's used when you want the program to exit with an error message at runtime
panic!("Negative value encountered: {}");

// It's used to communicate to the compiler that a certain code path will never be taken.
unreachable!("This line should never be reached");
```