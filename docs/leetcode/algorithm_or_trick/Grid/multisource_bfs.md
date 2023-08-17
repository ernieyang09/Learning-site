# Multisource bfs

 The BFS algorithm is being applied to multiple starting points or source nodes simultaneously. This can be useful in scenarios where you want to explore or search for connections from multiple starting points in a grid(graph) at the same time.

 [542. 01 Matrix](https://leetcode.com/problems/01-matrix/description/)

 Start from every 0, for every iteration, you can make a new edge for next iteration.

 ```python
 class Solution:
    def updateMatrix(self, mat: List[List[int]]) -> List[List[int]]:

        m = len(mat)
        n = len(mat[0])

        dq = deque([])

        for i in range(m):
            for j in range(n):
                if mat[i][j] == 0:
                    dq.append((i,j))
                else:
                    mat[i][j] = 'X'

        s = set()

        k = 1

        while dq:

            lens = len(dq)

            for _ in range(lens):

                x, y = dq.popleft()

                if (x,y) in s:
                    continue
                
                s.add((x,y))

                for i, j in [(0,1),(0,-1),(1,0),(-1,0)]:
                    if not (0<=i+x<m and 0<=j+y<n):
                        continue
                    
                    if mat[i+x][j+y] == 'X':
                        mat[i+x][j+y] = k
                        dq.append((i+x, j+y))

            k += 1

        return mat
 ```

