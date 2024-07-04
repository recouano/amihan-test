# Problem Set 3: Longest Increasing Subsequence

## Problem Description

Given an unsorted array of integers, find the length of the longest increasing subsequence. A subsequence is a sequence of elements that appear in the same order as they are in the original sequence, but not necessarily consecutively. In addition to that, an increasing subsequence is a subsequence in which the elements are in strictly increasing order.

## Solution Overview

This approach utilizes dynamic programming to solve the problem and the steps are as follows:

### 1. Initialize the DP array:

- Create an array `dp` of the same length as the input array, initialized with all 1s.
- This is because each individual element is an increasing subsequence of length 1.

### 2. Iterate through the array:

- Start from the second element `index 1` and go to the end of the array.

### 3. For each element, iterate all previous elements:

- If the current element is greater than a previous element, we can potentially extend the subsequence ending at that previous element.

### 4. Update the DP array:

- For each valid extension, update `dp[i]` to be the maximum of its current value and `dp[j] + 1`, where `j` is the index of the smaller previous element.

### 5. Keep track of the maximum value:

- Maintain a variable `maxLength` to store the maximum value seen in the dp array.

### 6. Return the result:

- After processing all elements, return the maximum value, which represents the length of the longest increasing subsequence.

## Instructions to Run the Code

1. This assumes that the machine has node and VSCode installed.
2. Open\Clone this repo in VSCode. In my case this is `D:\code\amihan-test`.
3. Open a terminal in VSCode. Hotkey is `Ctrl + Shift + ~` for Windows and `Ctrl + ~` for macOS.
4. Type `node .\problem-set-3\lengthOfLIS.js` on the terminal. Press Enter.
5. The results of the program are displayed on the console with corresponding test cases.
