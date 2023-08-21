# Topological Sort

Topological Sort is used in directed acyclic graph(DAG) to find reasonable sequence.

- Character sequence
- Task sequence

# Step

1. Declare a map and list for n nodes.
2. Record each component and connect them and store in a map.
3. Add one indeg or outdeg.(Depends on the position)
4. Create a queue , poll out all idx which its indeg or outdeg == 0
5. Iterate each node, for its connected node, indeg or outdeg -= 1, if it becomes 0 then append into queue.

Common pattern

```python

M = defaultdict(list)
indeg = [0] * n

for x, y in condition:
  M[x].append(y)
  indeg[y] += 1
  # outdeg[x] += 1

dq = deque([ i for i in range(n) if indeg[i] == 0])


while dq:

  # benefit if we want to record current level...
  lens = len(dq)

  for _ in range(lens):

    idx = dq.popleft()

    for vv in M[idx]:
      # cause node idx has been consumed
      indeg[vv] -= 1
      if indeg[vv] == 0:
        dq.append(vv)

# ....

```
