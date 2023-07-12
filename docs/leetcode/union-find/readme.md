# Union Find

When the edges of the graph are dynamic – changing over time – DFS is not a good choice since it cannot be applied progressively; we can compute the connected components faster by using union-find.

The union-find algorithm is best suited for situations where the equivalence relationship is changing, i.e., there are "Union" operations which need to be performed on your set of partitions. Given a fixed undirected graph, you don't have the equivalence relationships changing at all - the edges are all fixed. OTOH, if you have a graph with new edges being added, DFS won't cut it. While DFS is asymptotically faster than union-find, in practice, the likely deciding factor would be the actual problem that you are trying to solve.


common pattern

```python
        parents = list(range(n))

        def find(x):
            if x not in parents:
                parents[x] = x
            if x != parents[x]:
                parents[x] = find(parents[x])
            return parents[x]

        def union(x, y):
            x = find(x)
            y = find(y)
            if x < y:
                parents[y] = x
            else:
                parents[x] = y
```
