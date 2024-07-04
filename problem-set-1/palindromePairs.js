function isPalindrome(s) {
  for (let i = 0; i < s.length / 2; i++) {
    if (s[i] !== s[s.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

function palindromePairs(words) {
  const pairs = [];
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words.length; j++) {
      if (i !== j) {
        const combinedWord = words[i] + words[j];
        if (isPalindrome(combinedWord)) {
          pairs.push([i, j]);
        }
      }
    }
  }
  return pairs;
}

function runTestCases() {
  const testCases = [
    {
      input: ["abcd", "dcba", "lls", "s", "sssll"],
      expected: [
        [0, 1],
        [1, 0],
        [2, 4],
        [3, 2],
      ],
    },
    {
      input: ["bat", "tab", "cat"],
      expected: [
        [0, 1],
        [1, 0],
      ],
    },
    {
      input: ["a", ""],
      expected: [
        [0, 1],
        [1, 0],
      ],
    },
    {
      input: ["a", "b", "c", "ab", "ba", "abc", "cba"],
      expected: [
        [0, 4],
        [1, 3],
        [3, 0],
        [3, 4],
        [3, 6],
        [4, 1],
        [4, 3],
        [5, 4],
        [5, 6],
        [6, 5],
      ],
    },
    {
      input: [],
      expected: [],
    },
    {
      input: ["a"],
      expected: [],
    },
  ];

  testCases.forEach((testCase, index) => {
    const result = palindromePairs(testCase.input);
    console.log(`Test case ${index + 1}:`);
    console.log(`Input: ${JSON.stringify(testCase.input)}`);
    console.log(`Expected: ${JSON.stringify(testCase.expected)}`);
    console.log(`Result: ${JSON.stringify(result)}`);
    console.log(
      `Status: ${
        JSON.stringify(result) === JSON.stringify(testCase.expected)
          ? "PASSED"
          : "FAILED"
      }`
    );
    console.log("---");
  });
}

runTestCases();
