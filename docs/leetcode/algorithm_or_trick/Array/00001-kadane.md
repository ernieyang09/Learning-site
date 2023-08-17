# Kadane’s Algorithm

Kadane's Algorithm is a classic computer algorithm used to find the maximum subarray sum in a given array of numbers.

Largest Sum Contiguous Subarray

[53. Maximum Subarray](https://leetcode.com/problems/maximum-subarray/description/)


current and res

current = max(current + nums[i], nums[i]), it means whenever nums[i] > currentSum, just throw away currentSum, so it can accumulate more for contiguous subarray.

```python
class Solution:
    def maxSubArray(self, nums: List[int]) -> int:

        n = len(nums)

        if n == 1:
            return nums[0]

        current = 0

        res = float('-inf')

        for i in range(len(nums)):
            current = max(current + nums[i], nums[i])
            res = max(res, current)

        return res
```
