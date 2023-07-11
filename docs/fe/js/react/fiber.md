---
sidebar_position: 3
---


# Fiber

- Chunk render
- Different priority tasks


JSX -> React Element -> Fiber Node


### Reconciliation

compare the vdom diff, then only render the diff part into the real dom.

- if two dom are diffrent, render all the children
- recursive based on children

from tree to another tree. time complexity: O(n)


from recursive Stack Reconciler to iteration Fiber Reconciler
