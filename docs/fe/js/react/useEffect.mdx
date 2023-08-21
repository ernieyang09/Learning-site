---
sidebar_position: 1
---

# useEffect

useEffect: lets us express different kinds of side effects after a component renders.

dependencies argument: useEffect(callback, dependencies) lets you control when the side-effect runs.


It's not recommend to use ref.current in dep array.

The fact that an update the a ref.current value doesn't trigger a re-render is an intentional feature. 

Below is a hack

```js
function MeasureExample() {
  const [height, setHeight] = useState(0);

  const measuredRef = useCallback(node => {
    if (node !== null) {
      setHeight(node.getBoundingClientRect().height);
    }
  }, []);

  return (
    <>
      <h1 ref={measuredRef}>Hello, world</h1>
      <h2>The above header is {Math.round(height)}px tall</h2>
    </>
  );
}
```


For the each Fiber node, it has the memorizedState and the state, hook, effect are stoed in the linked list.

That's the reason why we can't use these functions in if/else(it will skip the linked list node).
