var lengthOfLIS = function (nums) {
  if (nums.length === 0) {
    return 0;
  } else {
    const dp = new Array(nums.length).fill(1);
    let maxLength = 1;

    for (let i = 1; i < nums.length; i++) {
      for (let j = 0; j < i; j++) {
        if (nums[i] > nums[j]) {
          dp[i] = Math.max(dp[i], dp[j] + 1);
        }
      }
      maxLength = Math.max(maxLength, dp[i]);
    }

    return maxLength;
  }
};

function runTestCases(lengthOfLIS) {
  const testCases = [
    { input: [10, 9, 2, 5, 3, 7, 101, 18], expected: 4 },
    { input: [0, 1, 0, 3, 2, 3], expected: 4 },
    { input: [7, 7, 7, 7, 7, 7, 7], expected: 1 },
    { input: [], expected: 0 },
    { input: [1], expected: 1 },
    { input: [1, 3, 6, 7, 9, 4, 10, 5, 6], expected: 6 },
    { input: [3, 2, 1], expected: 1 },
    { input: [1, 2, 3, 4, 5], expected: 5 },
  ];

  testCases.forEach((testCase, index) => {
    const result = lengthOfLIS(testCase.input);
    console.log(`Test Case ${index + 1}:`);
    console.log(`Input: \t\t[${testCase.input}]`);
    console.log(`Expected: \t${testCase.expected}`);
    console.log(`Got: \t\t${result}`);
    console.log(
      `Result: \t${result === testCase.expected ? "PASSED" : "FAILED"}`
    );
    console.log("------------------------------------");
  });
}

runTestCases(lengthOfLIS);
