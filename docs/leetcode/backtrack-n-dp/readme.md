# Backtrack and DP


### Backtrack
#### Top-Down (Memoization)

The top-down consists in solving the problem in a "natural manner" and check if you have calculated the solution to the subproblem before.

### DP

#### Bottom-up (Tabulation) DP

The bottom-up approach (to dynamic programming) consists in first looking at the "smaller" subproblems, and then solve the larger subproblems using the solution to the smaller problems.


<br/><br/>

Backtrack sometimes can prune more possibilites. But might be stack overflow.

DP sometimes can reduce space complexity like O(n^2) -> O(n). But it's harder to think.

<br/>

```python

# backtrack
if condition:
  res = backtrack(x + i) # only run with possible solution

# dp

for i in range(n):
  # need to run for every i even you already know some of i can't be correct.
  if condition:
    dp[i] = dp[i - x]

```

<br/><br/>




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


### Game theory

minimax (877, 486)

```python
def getBestScorePlayer1(left, right):

    scorePickLeft = nums[left] - getBestScorePlayer2(left+1, right)
    scorePickRight = nums[right] - getBestScorePlayer2(left, right-1)

    return max(scorePickLeft, scorePickRight)

def getBestScorePlayer1(left, right):

    scorePickLeft = nums[left] - getBestScorePlayer1(left+1, right)
    scorePickRight = nums[right] - getBestScorePlayer1(left, right-1)
    return max(scorePickLeft, scorePickRight)

# if two player has same rules
def getBestScorePlayer(left, right):

    scorePickLeft = nums[left] - getBestScorePlayer(left+1, right)
    scorePickRight = nums[right] - getBestScorePlayer(left, right-1)
    return max(scorePickLeft, scorePickRight)

```

