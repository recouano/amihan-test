# Problem Set 2: Valid Parentheses

## Problem Description

Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is
valid. An input string is valid if:

1. Open brackets must be closed by the same type of brackets.
2. Open brackets must be closed in the correct order.

## Solution Overview

This approach uses a stack to keep track of opening brackets and ensure proper matching and ordering of brackets. It iterates through each character in the input string, following these steps:

1. If an opening bracket is encountered, it's pushed onto the stack.
2. If a closing bracket is encountered:
   - If the stack is empty or the top of the stack doesn't match the current closing bracket, the string is invalid.
   - Otherwise, pop the matching opening bracket from the stack.
3. If any non-bracket character is encountered, the string is invalid.
4. After processing all characters, the string is valid if and only if the stack is empty.

## Instructions to Run the Code

1. This assumes that the machine has node and VSCode installed.
2. Open\Clone this repo in VSCode. In my case this is `D:\code\amihan-test`.
3. Open a terminal in VSCode. Hotkey is `Ctrl + Shift + ~` for Windows and `Ctrl + ~` for macOS.
4. Type `node .\problem-set-2\validParentheses.js` on the terminal. Press Enter.
5. The results of the program are displayed on the console with corresponding test cases.
