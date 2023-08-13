# Binary Search

Common pattern

```python
def check(num):
    pass

l, r = 0, len(arr) - 1

while l < r:
    mid = l + (r - l) // 2
    # mid = r - (r - l) // 2
    
    if check(mid):
        # depends on condition
        l = mid
    else:
        # depends on condition
        r = mid - 1
        
return l
```

The benefit for this pattern.

* Don't need to check l == r condition
* X = mid , means at X index, the condition are met.

Time complexity: For binary search O(log n) , for check function it depends.


### Insert item

**Remember to use SortedList**

```python
arr.insert(val, idx)     # O(n)
bisect.insort(arr, val)  # O(n)

SortedList.add(val)      # O(log(n)) implemented with AVL tree or red black tree
```
