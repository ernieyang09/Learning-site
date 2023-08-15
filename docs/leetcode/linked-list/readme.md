# Linked List


### General Solution

```python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

dummy = ListNode(-1)
dummy.next = head

current = head

while current:
  # ... condition
  current = current.next

return dummy.next # head
```


Reverse linked list (cheating) in python

Make it become double linked list

```python

prev = None
current = head

while current.next:
  current.prev = prev
  current = current.next

# current = last element

```
