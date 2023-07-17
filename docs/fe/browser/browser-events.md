# Browser events

### Event Bubbling
When an event happens on an element, it first runs the handlers on it, then on its parent, then all the way up on other ancestors.

event.stopPropagation() , event.stopImmediatePropagation()

### Event capturing
From parents to child, elem.addEventListener(..., {capture: true})

### Event Delegation

If we have a lot of elements handled in a similar way, then instead of assigning a handler to each of them – we put a single handler on their common ancestor.
