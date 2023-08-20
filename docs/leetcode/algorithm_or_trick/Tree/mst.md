# Minimum Spanning Tree

There are not too many variantions for MST

Two algos for MST


### Prim

Time complexity (E log V)

```python
def prim(n, edges):
  E = defaultdict(list)

  for [v1, v2, w] in edges:
    E[v1].append([w, v2])
    E[v2].append([w, v1])
  
  queue = [(0, 0)]
  visited = set()
  total = 0

  while queue and len(visited) < n:
    cost, v = heappop(queue)
    if v not in visited:
        visited.add(v)
        total += cost
        for edge_cost, next_v in E[v]:
            heappush(queue, (edge_cost, next_v))

  return total if len(visited) == n else -1
```

### Kruskal

The concept is greedy and union find.

Time complexity (E log E)

```python
class UF:
  def __init__(self, n):
    self.count = n
    self.parents = list(range(n))
  
  def find(self, x):
    if x != self.parents[x]:
      self.parents[x] = find(self.parents[x])

    return self.parents[x]

  def union(self, x, y):
    x = self.find(x)
    y = self.find(y)

    if x < y:
      self.parents[y] = x
    else:
      self.parents[x] = y
    
    self.count -= 1

# [[v1, v2, w]]
def kruskal(n, egdes):
  uf = UF(n)
  edges.sort(key=lambda x: x[2])

  res = 0

  for [v1, v2, w] in edges:
    if uf.find(v1) != uf.find(v2):
      uf.union(v1, v2)
      res += w

  # check if all connected
  # the fisrt two connect but we only deduct 1 so the last count should be 1
  if uf.count != 1:
    return -1

  return res
```


Kruskal can use in simple graph, Prim is good for dense graph.
