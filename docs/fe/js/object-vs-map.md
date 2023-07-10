# Object vs Map

- Map key can be anything, object will change key into string key.
- Map can be iterated, for object, need to call extra function like Object.entries, Object.keys, Object.values.
- Iteration of Map follow the insert sequence, object doesn't.
- Map can store more keys than object.
- Map provide some map function like get, set, has, size...


For the article, object seems to have better performance.

If you use symbol as key, then can consider use Map.

obj has its own inherited properties , in the rare condition, it will cause the problem. E.g **obj['toString'] = '123'**
