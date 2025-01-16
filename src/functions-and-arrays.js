// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(first, second) {
  if (first > second) {
    return first;
  } else if (first < second) {
    return second;
  } else {
    return first;
  }

  /*  return Math.max(first, second) */
}
console.log(maxOfTwoNumbers(7, 10));

// Iteration 2 | Find the Longest Word
const words = [
  "mystery",
  "brother",
  "aviator",
  "crocodile",
  "pearl",
  "orchard",
  "crackpot",
  "esternocleidomastoideo",
];

function findLongestWord(param) {
  let longestWord = " ";

  if (param.length === 0) {
    return null;
  }

  for (let i = 0; i < param.length; i++) {
    if (param[i].length > longestWord.length) {
      longestWord = param[i];
    }
  }

  return longestWord;
}
console.log(findLongestWord(words));

// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(param) {
  let sum = 0;

  if (param.length === 0) {
    sum = 0;
    return sum;
  }

  for (let i = 0; i < param.length; i++) {
    sum += param[i];
  }
  return sum;
}
console.log(sumNumbers(numbers));

// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(param) {
  if (param.length === 0) {
    return 0;
  } else {
    return sumNumbers(param) / param.length;
  }
}
console.log(averageNumbers(numbers2));

// Iteration 5 | Find Elements
const words2 = [
  "machine",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "truth",
  "disobedience",
];

function doesWordExist(param, searchedWord) {
  if (param.length === 0) {
    return null;
  }

  if (param.includes(searchedWord)) {
    return true;
  }

  param.includes(!searchedWord);
  return false;
}
console.log(doesWordExist(words2, "matter"));
