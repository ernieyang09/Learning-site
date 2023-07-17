# Backtrack and DP


### DP

#### Top-Down (Memoization)

The top-down consists in solving the problem in a "natural manner" and check if you have calculated the solution to the subproblem before.

### Bottom-up (Tabulation) DP

The bottom-up approach (to dynamic programming) consists in first looking at the "smaller" subproblems, and then solve the larger subproblems using the solution to the smaller problems.


[ref](https://www.enjoyalgorithms.com/blog/top-down-memoization-vs-bottom-up-tabulation)


### Bitmask DP (狀態壓縮)

```python
finalState = 0
for i in range(len(condition)):
    finalState += 1 << i

# equal

finalState = (1 << len(condition)) - 1

```


### Addon 

- interval questions
    - the maximum number of non-overlaping intervals -> sorted by ending point
    - the minimum number of interval for the whole ranges -> sorted by start point
    