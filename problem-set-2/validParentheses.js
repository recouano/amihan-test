function isValid(s) {
  const stack = [];
  const bracketPairs = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  for (let char of s) {
    if ("([{".includes(char)) {
      stack.push(char);
    } else if (")]}".includes(char)) {
      if (stack.length === 0 || stack.pop() !== bracketPairs[char]) {
        return false;
      }
    }
  }

  return stack.length === 0;
}
