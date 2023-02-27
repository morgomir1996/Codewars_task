//  https://www.codewars.com/kata/5287e858c6b5a9678200083c/train/javascript

function narcissistic(value) {
  const str = value.toString();
  const digits = str.split("").map((x) => Math.pow(x, str.length)).reduce((a, b) => a + b);
  return Number(digits) === value;
}
