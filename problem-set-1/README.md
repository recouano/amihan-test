# Problem Set 1: Palindrome Pairs

## Problem Description

Given a list of unique words, the task is to find all pairs of distinct indices `(i, j)` in the list so that
the concatenation of the two words, i.e., `words[i] + words[j]`, forms a palindrome.

## Solution Overview

This approach iterates through all possible pairs of words in the input array.
All characters in each combined word when checking for palindromes, following these steps:

1. Define an isPalindrome function to check if a string is a palindrome.
2. Iterate through all pairs of words in the input array.
3. For each pair, concatenate the words `(words[i] + words[j])` and check if the result is a palindrome.
4. If it is, add the indices of the words to the result list.

## Instructions to Run the Code

1. This assumes that the machine has node and VSCode installed.
2. Open\Clone this repo in VSCode. In my case this is `D:\code\amihan-test`.
3. Open a terminal in VSCode. Hotkey is
   `Ctrl+Shift+~` for Windows and `Cmd+Shift+~` for macOS.
4. Type `node .\problem-set-1\palindromePairs.js` on the terminal. Press Enter.
5. The results of the program are displayed on the console with corresponding test cases.
