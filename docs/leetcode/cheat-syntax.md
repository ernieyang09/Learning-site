---
sidebar_position: -1
hide_title: true
keywords:
  - leetcode
---

# Cheat syntax

### bisect

* bisect
  * bisect.bisect_left(arr, target, lo=0, hi=i) # define query range


### itertools
* pairwise(p[0], p[1]), (p[1], p[2])
  - pairwise('ABCDEFG') --> AB BC CD DE EF FG
* accumulate(arr, func) # default = add
  - accumulate(arr, min)
* permutations(arr, num)
* combinations(arr, num)


### Orderdict

Implement by double linked list.

* The regular dict was designed to be very good at mapping operations. Tracking insertion order was secondary.
* The OrderedDict was designed to be good at reordering operations. Space efficiency, iteration speed, and the performance of update operations were secondary.
* The OrderedDict algorithm can handle frequent reordering operations better than dict. As shown in the recipes below, this makes it suitable for implementing various kinds of **LRU caches**.
* d[k] = d.pop(k) == od.move_to_end(k, last=True)
* no method for od.move_to_end(k, last=False)

```python
from collections import OrderedDict
od = OrderDict()
od.popitem(last=True) # True = LIFO, False = FIFO
od.move_to_end(key, last=True) # True = right, False = left

```


```python
# list to dict
rq = { value: key for key , value in enumerate(req_skills) }

```

```python
# set

fruits1={"apple","banana","orange","lemon"}
fruits2={"tomato","apple","banana"}

# intersection
fruits1.intersection(fruits2)
fruits1 & fruits2
# set(['apple', 'banana'])

#union
fruits1.union(fruits2)
fruits1 | fruits2
# set(['tomato', 'lemon', 'apple', 'orange', 'banana'])

#difference
fruits1.difference(fruits2)
fruits1 - fruits2
# set(['orange', 'lemon']) 

#symmetric_difference
fruits1.symmetric_difference(fruits2)
fruits1 ^ fruits2
# set(['tomato', 'orange', 'lemon'])

```
