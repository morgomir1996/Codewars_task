//  https://www.codewars.com/kata/5287e858c6b5a9678200083c/train/javascript

function narcissistic(value) {
  const str = value.toString();
  const digits = str.split("").map((x) => Math.pow(x, str.length)).reduce((a, b) => a + b);
  return Number(digits) === value;
}


//   https://www.codewars.com/kata/58b972cae826b960a300003e/train/javascript


function missingWord(nums, str) {
  const positions = nums.sort((a, b) => a - b);
  const letters = str.toLowerCase().split("").reduce((a, b) => (b !== " " ? a + b : a));
  const word = positions.map((x) => (x = letters[x])).join("");
  if (word.length === 3) {
    return word;
  } else {
    return "No mission today";
  }
}
