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

### Render Phase
- Retrieves the children from the component
- Updates state and props
- Calls lifecycle hooks
- Compares them to the previous children and figures out the DOM updates that need to be performed

High priority task -> requestAnimationFrame, low prioity task -> requestIdleCallback 

#### Old Reconciler
- Work synchronous
- Work recursively, like call stack
- Had to work until stack is empty

#### Fiber Reconciler
- From stack -> linked list
- dfs, sequence child, self, sibling
- workLoop (while loop, not call stack)

Fiber node attr, (children, sibling)

### commit phase

Update the the real dom with side effect list, can't not be interrupted.



[ref](https://medium.com/starbugs/react-%E9%96%8B%E7%99%BC%E8%80%85%E4%B8%80%E5%AE%9A%E8%A6%81%E7%9F%A5%E9%81%93%E7%9A%84%E5%BA%95%E5%B1%A4%E6%9E%B6%E6%A7%8B-react-fiber-c3ccd3b047a1)