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

function runTestCases() {
  const testCases = [
    { input: "()", expected: true },
    { input: "()[]{}", expected: true },
    { input: "(]", expected: false },
    { input: "([)]", expected: false },
    { input: "{[]}", expected: true },
    { input: "((", expected: false },
    { input: "))", expected: false },
    { input: "({[]})", expected: true },
    { input: "({[}])", expected: false },
  ];

  testCases.forEach((testCase, index) => {
    const result = isValid(testCase.input);
    console.log(`Test Case ${index + 1}:`);
    console.log(`Input:\t\t"${testCase.input}"`);
    console.log(`Expected:\t${testCase.expected}`);
    console.log(`Result:\t\t${result}`);
    console.log(
      `Status:\t\t${result === testCase.expected ? "PASSED" : "FAILED"}`
    );
    console.log("------------------------------");
  });
}

runTestCases();
